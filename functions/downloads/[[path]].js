const APK_PATH = "/downloads/pharmacy-training-tracker-v1.0.0.apk";
const APK_FILENAME = "pharmacy-training-tracker-v1.0.0.apk";
const DEFAULT_PUBLIC_APK_URL =
  "https://github.com/moleculartracker/pharma-train-tracker-website/releases/download/1/pharmacy_training_tracker_v1.0.0.apk";

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

export async function onRequest({ request, env }) {
  const { pathname } = new URL(request.url);

  if (pathname !== APK_PATH) {
    return new Response("Not found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: {
        allow: "GET, HEAD",
      },
    });
  }

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
