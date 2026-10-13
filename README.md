# VoicePro — RP Soundboard

A fully offline-capable soundboard for roleplay. No server needed — runs entirely in the browser.

## Features

- **Unlimited sounds** — add as many as you want
- **Keyboard shortcuts** — press the assigned key to trigger instantly
- **Categories** — filter by Combat, Ambient, FX, Voice, or custom
- **Favorites** — star important sounds for quick access
- **Master volume** — one slider controls everything
- **Dark mode** — easy on the eyes during long sessions
- **Import / Export** — backup your config as JSON
- **Drag & drop** audio files directly onto the pad creator
- **Right-click** any pad to edit it
- **`Space`** stops all playing sounds
- **`Esc`** closes modals

## Deployment (GitHub Pages)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: main branch**
3. Your board lives at `https://youruser.github.io/VoicePro/`

All sound data is stored in your browser's localStorage — no server required.

## Adding Sounds

1. Click **+ Add Sound**
2. Fill in name, category, icon, and shortcut key
3. Either **drag an audio file** onto the drop zone or **paste a URL**
4. Save — it appears immediately on the board

## Keyboard Layout

Default layout: `1`–`0` and `Q`–`P` are pre-registered.
You can set any key in the edit modal.

## Tips for RP Use

- Keep it in a **floating window** alongside your chat/VC
- Pin your most-used sounds to the top row (Q–P keys)
- Export your config regularly as backup
- For local files, drag them in — they're stored as object URLs (lasts for the session)
- For permanent local storage, host your audio files on a CDN and paste the URLs
