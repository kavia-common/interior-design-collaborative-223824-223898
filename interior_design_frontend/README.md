# Interior Design Collaborative - Frontend (React)

A user-friendly web interface for creating and sharing interior design floor plans.

## Key Features

- Responsive multi-panel layout:
  - Navigation sidebar
  - Main editor workspace (canvas placeholder + basic toolbar)
  - Community gallery (grid with cards)
- Routing for Home, Editor, Gallery, About
- Ocean Professional theme (blue primary, amber accents)
- Feature flags via `REACT_APP_FEATURE_FLAGS`
- No hardcoded secrets; API base read from `REACT_APP_API_BASE` with graceful fallbacks

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server (port 3000; preview startup remains unchanged):

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Routes

- `/` Home
- `/editor` Editor workspace with toolbar, canvas placeholder, and side panels
- `/gallery` Community gallery with card grid (can be disabled via flags)
- `/about` Project info and environment overview

## Environment Variables

Create `.env` in this folder or set variables in your environment. See `.env.example` for reference.

- `REACT_APP_API_BASE` (preferred) - Base URL for backend API requests
- `REACT_APP_BACKEND_URL` (fallback) - Legacy backend URL if `REACT_APP_API_BASE` not set
- `REACT_APP_FRONTEND_URL` - Public URL of the frontend (optional)
- `REACT_APP_WS_URL` - WebSocket endpoint (optional)
- `REACT_APP_NODE_ENV` - Node environment override (optional)
- `REACT_APP_FEATURE_FLAGS` - Feature flags in JSON or comma list
  - JSON example: `{"gallery":true,"betaEditor":false}`
  - List example: `gallery,betaEditor` (interpreted as true for keys)
- Other variables in container_env are supported but not required by UI

Graceful handling:
- If a var is missing, UI falls back to safe defaults and displays “(not configured)” where relevant.

## Theming

Ocean Professional theme applied via `src/theme.js` and component-level styles:
- Primary: `#2563EB`
- Secondary: `#F59E0B`
- Surface: `#ffffff`
- Background: `#f9fafb`
- Text: `#111827`

## Code Structure

```
src/
  components/
    Layout.js      # AppShell layout with sidebar + header + content
    layout.css     # Layout styling
  pages/
    Home.js
    Editor.js
    Gallery.js
    About.js
  utils/
    env.js         # Env/feature flag helpers with graceful fallback
  theme.js         # Theme tokens
  App.js           # Routing
  index.js         # React entry
```

## Security & Compliance

- No secrets in code; configuration via env vars only
- Avoid logging sensitive values; debug logs for missing envs only
- Feature flags parsed safely (JSON or comma-separated)

## Development Notes

- This project uses `react-router-dom@6` for routing.
- Editor canvas is a placeholder; integrate real drawing logic later.
- Gallery content is static sample data; wire to API when available.

