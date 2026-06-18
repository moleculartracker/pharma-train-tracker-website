const APK_FILENAME = "pharmacy_training_tracker.apk";
const DEFAULT_PUBLIC_APK_URL =
  "https://github.com/moleculartracker/pharma-train-tracker-website/releases/download/1/pharmacy_training_tracker.apk";
const DEFAULT_GITHUB_OWNER = "moleculartracker";
const DEFAULT_GITHUB_REPO = "pharma-train-tracker-website";
const DEFAULT_GITHUB_RELEASE_TAG = "1";

const githubApiHeaders = (token) => ({
  accept: "application/vnd.github+json",
  authorization: `Bearer ${token}`,
  "user-agent": "pharmacy-training-tracker-pages",
  "x-github-api-version": "2022-11-28",
});

const buildDownloadResponse = (upstream) => {
  const headers = new Headers({
    "content-type": "application/vnd.android.package-archive",
    "content-disposition": `attachment; filename="${APK_FILENAME}"`,
    "cache-control": "public, max-age=300",
  });

  for (const name of ["content-length", "content-range", "accept-ranges"]) {
    const value = upstream.headers.get(name);
    if (value) {
      headers.set(name, value);
    }
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
};

const unavailable = () =>
  new Response("APK download is not available right now.", {
    status: 502,
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });

async function fetchPublicApk(request, env) {
  const upstreamHeaders = new Headers();
  const range = request.headers.get("range");

  if (range) {
    upstreamHeaders.set("range", range);
  }

  const upstream = await fetch(env.APK_SOURCE_URL || DEFAULT_PUBLIC_APK_URL, {
    headers: upstreamHeaders,
    redirect: "follow",
  });

  if (upstream.ok || upstream.status === 206) {
    return buildDownloadResponse(upstream);
  }

  return unavailable();
}

async function fetchPrivateGitHubApk(request, env) {
  if (!env.GITHUB_TOKEN) {
    return null;
  }

  const owner = env.GITHUB_OWNER || DEFAULT_GITHUB_OWNER;
  const repo = env.GITHUB_REPO || DEFAULT_GITHUB_REPO;
  const tag = env.GITHUB_RELEASE_TAG || DEFAULT_GITHUB_RELEASE_TAG;
  const assetName = env.APK_ASSET_NAME || APK_FILENAME;
  const releaseUrl = `https://api.github.com/repos/${owner}/${repo}/releases/tags/${tag}`;
  const release = await fetch(releaseUrl, {
    headers: githubApiHeaders(env.GITHUB_TOKEN),
  });

  if (!release.ok) {
    return unavailable();
  }

  const releaseData = await release.json();
  const asset = releaseData.assets?.find((item) => item.name === assetName);

  if (!asset?.url) {
    return unavailable();
  }

  const assetHeaders = new Headers({
    ...githubApiHeaders(env.GITHUB_TOKEN),
    accept: "application/octet-stream",
  });
  const range = request.headers.get("range");

  if (range) {
    assetHeaders.set("range", range);
  }

  const upstream = await fetch(asset.url, {
    headers: assetHeaders,
    redirect: "follow",
  });

  if (upstream.ok || upstream.status === 206) {
    return buildDownloadResponse(upstream);
  }

  return unavailable();
}

export async function onRequest({ request, env }) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: {
        allow: "GET, HEAD",
      },
    });
  }

  const privateApk = await fetchPrivateGitHubApk(request, env);

  if (privateApk) {
    return privateApk;
  }

  return fetchPublicApk(request, env);
}
