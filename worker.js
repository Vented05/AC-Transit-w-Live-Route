// Cloudflare Worker: CORS proxy for the AC Transit API (GET only).
// Optional variables: TOKEN (secret, your AC Transit key), ALLOW_ORIGIN (e.g. https://yourname.github.io)
export default {
  async fetch(req, env) {
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOW_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: cors });
    const u = new URL(req.url);
    const target = new URL('https://api.actransit.org/transit' + u.pathname + u.search);
    if (env.TOKEN) target.searchParams.set('token', env.TOKEN);
    const r = await fetch(target, { headers: { Accept: 'application/json' } });
    const h = new Headers(r.headers);
    for (const [k, v] of Object.entries(cors)) h.set(k, v);
    return new Response(r.body, { status: r.status, headers: h });
  }
};
