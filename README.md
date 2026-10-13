# VoicePro — Sang'gre RP Soundboard

Soundboard pre-loaded with SFX for **"Ang Mga Sang'gre sa Mundo ng mga Tao"** play.

## Quick Start

1. Open `index.html` in any browser
2. Click anywhere once (browser audio permission)
3. Press **Space** to stop all sounds
4. Use keyboard keys **1–0, Q, W, E, R** to trigger cues

## Cue Map (Scene → Button)

| Key | Cue | Scene | SFX Source | License |
|-----|-----|-------|-----------|---------|
| **1** | 👁️ Cassiopeia Calls | Scene 1 — Intro | `01_magic_teleport.mp3` | CC0 ✅ |
| **2** | 🎵 Sang'gre Intro Song | Scene 1 — Intro | *(add your own)* | — |
| **3** | 💣 WWII Battlefield | Scene 2 — War | `06_war_gunfire.mp3` | CC0 ✅ |
| **4** | 💥 Explosion / Bomb | Scene 2 — War | `07_explosion.mp3` | CC0 ✅ |
| **5** | ⚔️ Action Music — Fight | Scene 2 — Battle | `03_epic_battle.mp3` | CC0 ✅ |
| **6** | 🔫 Gunshot | Scene 2 — War | `06_war_gunfire.mp3` | CC0 ✅ |
| **7** | ⚡ Laser Shot | Scene 2 — Combat FX | `07b_laser_shot.mp3` | CC0 ✅ |
| **8** | 💢 Hit / Impact | Scene 2 — Combat FX | `07c_hit.mp3` | CC0 ✅ |
| **9** | 🎩 Ramon Dramatic Entrance | Scene 4 — Entrance | `02_victory_fanfare.mp3` | CC0 ✅ |
| **0** | ⛈️ Thunder Clap — Estrada | Scene 5 — Villain | `05_thunder.mp3` | CC0 ✅ |
| **Q** | 😈 Estrada Challenge Music | Scene 5 — Villain | `05_thunder.mp3` | CC0 ✅ |
| **W** | ✨ Mystical Magic Sound | Scene 6 — Ending | `09_mystical_powerup.mp3` | CC0 ✅ |
| **E** | 🌀 Teleport Out | Scene 6 — Ending | `08_teleport_2.mp3` | CC0 ✅ |
| **R** | 🎶 Inspirational Outro | Scene 6 — Ending | `04_epilogue.mp3` | CC-BY 4.0 ✅ |

## Sounds NOT yet sourced (add your own)

| Key | Cue | What you need |
|-----|-----|--------------|
| **2** | 🎵 Sang'gre Intro Song | Search YouTube Audio Library or Pixabay for "Filipino fantasy orchestral" or "Encantadia theme" |

## How to Add Missing SFX

1. Click **+ CUE** on the soundboard
2. Enter the cue name
3. Either drag an audio file onto the drop zone **or** paste a URL
4. Save — it appears immediately

## Timer Setup

Two timers pre-configured:
- **Show Runtime** — stopwatch, counts up during the performance
- **Act 2 Countdown** — 15-minute countdown, click label to edit duration

## SFX Sources & Licenses

All downloaded SFX are **CC0 (Public Domain)** unless noted:

| File | Source | License |
|------|--------|---------|
| `01_magic_teleport.mp3` | OpenGameArt — teleport.wav | CC0 |
| `02_victory_fanfare.mp3` | OpenGameArt — Victory.mp3 | CC0 |
| `03_epic_battle.mp3` | OpenGameArt — Ends of the Earth.mp3 | CC0 |
| `04_epilogue.mp3` | OpenGameArt — epilogue.mp3 | CC-BY 4.0 (attribution required) |
| `05_thunder.mp3` | OpenGameArt — thunderclap.ogg | CC-BY 3.0 (attribution required) |
| `06_war_gunfire.mp3` | OpenGameArt — singlebullet1.wav | CC0 |
| `07_explosion.mp3` | OpenGameArt — Explosions pack | CC0 |
| `07b_laser_shot.mp3` | OpenGameArt — Laser-weapon pack | CC0 |
| `07c_hit.mp3` | OpenGameArt — Hit pack | CC0 |
| `08_teleport_2.mp3` | OpenGameArt — Teleport pack | CC0 |
| `09_mystical_powerup.mp3` | OpenGameArt — Power-up pack | CC0 |

### Attribution for CC-BY tracks

If you use `04_epilogue.mp3` or `05_thunder.mp3`, credit:
- **Epilogue** by tcarisland — CC-BY 4.0 — https://opengameart.org/content/epilogue
- **Thunder** by Jerimee — CC-BY 3.0 — https://opengameart.org/content/thunder

## Deployment (GitHub Pages)

```bash
cd ~/Projects/VoicePro
git remote add origin https://github.com/Astraxical/VoicePro.git
git push -u origin main
# Settings → Pages → Source: main branch, / (root)
```

## Controls

- **Space** — stop all sounds
- **Esc** — close modals
- **Right-click** a pad → edit or delete
- **M** button per channel → mute
- **S** button per channel → solo (hear only that cue)
- **Per-channel fader** → adjust individual volume
- **Master fader** → global volume
- **Timer label** → click to rename/edit countdown time
- **+ CUE** → add new sound
- **⚙ CONFIG** → export/import full board as JSON

## File Structure

```
VoicePro/
├── index.html          # Main soundboard (single file, no dependencies)
├── sfx/                # Pre-downloaded sound effects
│   ├── 01_magic_teleport.mp3
│   ├── 02_victory_fanfare.mp3
│   ├── 03_epic_battle.mp3
│   ├── 04_epilogue.mp3
│   ├── 05_thunder.mp3
│   ├── 06_war_gunfire.mp3
│   ├── 07_explosion.mp3
│   ├── 07b_laser_shot.mp3
│   ├── 07c_hit.mp3
│   ├── 08_teleport_2.mp3
│   └── 09_mystical_powerup.mp3
├── SFX-GUIDE.md        # Full SFX list with download links for each scene
└── README.md           # This file
```
