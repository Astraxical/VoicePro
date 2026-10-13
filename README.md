# VoicePro — Theater Sound Board

A desktop-theater-style soundboard for roleplay. Runs entirely in the browser — no server needed.

## Features

| Feature | What it does |
|---|---|
| **Channel Strips** | Each cue is its own strip: pad, volume fader, MUTE, SOLO, key remap |
| **Multi-Timer Dock** | Add unlimited timers side by side — countdowns AND stopwatches running simultaneously |
| **Timer Edit** | Click any timer label to rename it or change its countdown duration inline |
| **Master Fader** | Vertical slider controls overall volume globally |
| **Master Mute** | Big `M` button cuts everything instantly |
| **Solo Mode** | Solo one cue to hear only it, muting all others |
| **Per-Channel Volume** | Small slider on each strip |
| **Categories** | Filter by Combat, Ambient, FX, Voice or custom categories |
| **Search** | Instantly find cues by name |
| **Touch / Mobile** | Tap pads with haptic feedback, drag faders, responsive sizing |
| **Global Persistence** | Everything saves to localStorage — timers, cues, settings survive page reloads |
| **Import / Export** | Backup your entire board as JSON |

## Timer System

### Multiple Timers at Once
Each timer runs independently in the dock. You can have:
- **Show Runtime** (stopwatch) — counts up while you RP
- **Act 2 Start** (countdown) — 15 min warning
- **Entrance Cue** (countdown) — 30 sec to hit the pad
- **Break Time** (countdown) — 10 min rest timer

All running simultaneously, all persisted.

### Timer Controls
- **▶ / ⏸** — start or pause that timer
- **↺** — reset (re-arms countdowns)
- **✕** — delete the timer
- **Click the label** — open edit overlay to rename or set countdown time

### Time's Up
When a countdown hits 0:
- Display turns red and blinks
- Toast notification appears
- Device vibrates (if supported)
- Timer auto-stops — reset to re-arm

### Persistence
- Timers resume across page reloads
- Running state is saved and restored with correct elapsed time accounted for
- Auto-saves every 5 seconds

## Deployment (GitHub Pages)

```bash
cd Projects/VoicePro
git remote add origin git@github.com:YOUR_USER/VoicePro.git
git push -u origin main
# Settings → Pages → Source: main branch, / (root)
```

## Adding Cues

1. Click **+ CUE**
2. Fill in name, category, icon, and keyboard key
3. **Drag an audio file** onto the drop zone (or paste a URL)
4. Save — appears as a new channel strip

## Keyboard Shortcuts

- **Space** → stop all sounds
- **Esc** → close any open modal
- **Assigned keys** → trigger that cue instantly

## What Persists Globally

Everything is saved to your browser's localStorage and survives refresh/reopen:

- All cue names, icons, categories, keys, URLs, volumes, mute/solo states
- All timers (labels, types, durations, running state, elapsed time)
- Master volume and mute state
- Category filters and search (reset on new page)
