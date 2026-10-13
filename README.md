# VoicePro — Theater Sound Board

A desktop-theater-style soundboard for roleplay. No server needed — runs entirely in the browser.

## Features

| Feature | What it does |
|---|---|
| **Channel Strips** | Each cue is its own strip with a pad, volume fader, MUTE, SOLO, and key remap |
| **Show Timer** | Stopwatch & countdown timer — set a show length and get a red flash when time's up |
| **Master Fader** | Vertical slider at the top controls overall volume |
| **Master Mute** | Big `M` button cuts everything instantly |
| **Keyboard Cues** | Assign keys (Q, W, 1, 2…) to trigger sounds — works on any device with a keyboard |
| **Solo Mode** | Solo one cue to hear only it, muting all others |
| **Mute Per Channel** | Quick M button per strip |
| **Per-Channel Volume** | Tiny horizontal fader on each strip |
| **Categories** | Filter by Combat, Ambient, FX, Voice or custom categories |
| **Search** | Instantly find cues by name |
| **Touch / Mobile** | Tap pads, drag faders, haptic feedback on play |
| **Import / Export** | Backup your entire board as JSON |
| **localStorage** | Everything saves automatically in your browser |

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
4. Save — it appears as a new channel strip

## Keyboard Shortcuts

- **Space** → stop all sounds / master mute toggle
- **Esc** → close any open modal
- **Assigned keys** → trigger that cue instantly

## Theater vs Movie

This is built like a **theater lighting/sound board** — not a film studio:
- Physical-style channel strips with LED indicators
- Mute (M) and Solo (S) per channel
- Individual volume faders
- Cue numbers (C01, C02…)
- Show timer instead of scene markers
- utilitarian dark aesthetic with amber/green LEDs
