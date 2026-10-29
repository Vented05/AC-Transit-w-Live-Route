# Bus Tracker (unofficial)
Responsive PWA for the AC Transit API (not affiliated with or endorsed by AC Transit).

## Deploy
1. Push these files to a GitHub repo → Settings → Pages → `main` / root.
2. Open the Pages URL in Safari → Share → Add to Home Screen.
3. Settings tab → paste your API token (kept only on your device).

## Tabs
- **Home** – nearby stops, one card per route/direction with a swipeable row of upcoming buses (bus #, minutes, passenger load). Tap a bus to track it.
- **Favorites** – ☆ a card to save that route at that stop; same card UI.
- **Search** – trip planner: From (defaults to current location) → To (address, place or stop ID), leave now or depart at a time. Tap "Track this bus" to follow it with an automatic get-off alert.
- **Tracking** – map, route line, progress bar, upcoming stops, "Get off here" alert (banner, notification on Home Screen app, screen stays awake).

## Limits
- Planner = direct (no-transfer) routes from live predictions; "depart at" works only within the prediction window. Walk times are straight-line estimates.
- Dynamic Island / Live Activities require a native iOS app; not possible from a web app.
- If Safari blocks API calls (CORS), route requests through a small proxy and change `B` in index.html.

## Fixing "Failed to fetch" (CORS proxy)
1. Cloudflare dashboard → Workers & Pages → Create → Hello World → Deploy, then Edit code → paste `worker.js` → Deploy.
2. Worker → Settings → Variables and Secrets: add secret `TOKEN` (your AC Transit key) and `ALLOW_ORIGIN` = `https://YOURNAME.github.io`.
3. In the app: Settings → Proxy URL = your `*.workers.dev` address → Save. The token field can stay empty.

## Make it "just work" (no typing)
Edit `config.js` and set `proxy` to your `https://….workers.dev` address (GitHub: open file → pencil → Commit). The Worker already holds the token. The Home Screen app and Safari keep separate saved settings, which is why typed-in settings didn't carry over; `config.js` works for both.

## Transfers
Planner checks direct trips and one transfer (same stop or a walk up to ~900 ft, 2-min buffer), from live bus positions only.
