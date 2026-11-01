const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff"
    }
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      if (request.method !== "GET") {
        return json({ ok: false, error: "Method not allowed" }, 405);
      }

      try {
        const result = await env.DB.prepare("SELECT 1 AS ok").first();

        if (!result || result.ok !== 1) {
          throw new Error("Unexpected database response");
        }

        return json({
          ok: true,
          service: "LIFE CITY API",
          database: "connected"
        });
      } catch (error) {
        console.error("D1 health check failed:", error);
        return json({
          ok: false,
          service: "LIFE CITY API",
          database: "unavailable"
        }, 503);
      }
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ ok: false, error: "Not found" }, 404);
    }

    return env.ASSETS.fetch(request);
  }
};
