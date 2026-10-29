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
