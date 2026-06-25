const DEFAULT_SUPABASE_OWNTRACKS_URL =
  "https://rchlbowrhamvwalcnppu.supabase.co/functions/v1/owntracks-location-ingest";

const jsonResponse = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const passthroughHeaders = (request, env) => {
  const headers = new Headers();

  for (const name of [
    "authorization",
    "content-type",
    "user-agent",
    "x-limit-d",
    "x-limit-u",
    "x-owntracks-version",
  ]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  headers.set("x-owntracks-gateway-secret", env.OWNTRACKS_GATEWAY_SECRET);
  headers.set("x-forwarded-host", new URL(request.url).host);

  return headers;
};

export async function onRequest({ request, env }) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        allow: "POST, OPTIONS",
        "cache-control": "no-store",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "POST, OPTIONS" },
    });
  }

  if (!env.OWNTRACKS_GATEWAY_SECRET) {
    return jsonResponse({ error: "OwnTracks gateway is not configured" }, 500);
  }

  const upstreamUrl = env.SUPABASE_OWNTRACKS_URL || DEFAULT_SUPABASE_OWNTRACKS_URL;
  const upstream = await fetch(upstreamUrl, {
    method: "POST",
    headers: passthroughHeaders(request, env),
    body: request.body,
    redirect: "manual",
  });

  const headers = new Headers({
    "content-type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
    "cache-control": "no-store",
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}