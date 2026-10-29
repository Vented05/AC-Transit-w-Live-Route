# Bus Tracker (unofficial)
Static PWA using the AC Transit API (not affiliated with or endorsed by AC Transit).

## Deploy
1. Push these files to a GitHub repo → Settings → Pages → deploy from `main` / root.
2. Open the Pages URL in Safari → Share → Add to Home Screen.
3. In the app: Settings → paste your API token (saved only on your device).

## Use
Nearby / Search by stop ID → Arrivals → tap an ETA to track the bus → "Get off here" on your stop. A banner, notification (home-screen app, iOS 16.4+) and screen wake-lock help you know when to get off.

## Caveats
- Dynamic Island / Live Activities are native-iOS only (ActivityKit); a web app can't use them.
- Written against the documented `actrealtime/*` and `stops/*` endpoints; response field names were not tested. If the browser blocks calls (CORS), route requests through a small proxy (e.g. a Cloudflare Worker) and change `B` in index.html.
- Multi-leg trip planning isn't in the public API docs, so it isn't included.
