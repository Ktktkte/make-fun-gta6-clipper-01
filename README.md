# GTA 6 Is Out — 5-Star Police Chase (No Brakes)

Entry for make.fun bounty **gta6-clipper-01** — "Clip GTA 6 for the most YouTube views".
The top 20 most-watched videos share $500. Places go by YouTube views at the
deadline (Mon 2026-11-23 08:00 WIB).

## The clip

One moment, not a montage: the Raul Bautista bank getaway from Rockstar's
official **"Grand Theft Auto VI: An Extended Look"** (26:48, captured on
PlayStation 5) — police helicopter overhead, Jason leaning out of the getaway
car firing at a pursuing cruiser, then an on-foot shootout at 5 wanted stars.
The raw official footage was fetched in-session from Rockstar's own CDN
(`media-rockstargames-com.akamaized.net`, the 4K master linked from
rockstargames.com/VI/media) and cut + rendered here with ffmpeg: trimmed to
the chase, blur-filled to vertical 9:16 (1080x1920), hook text up front,
make.fun pitch on screen at the end. 36 seconds — a YouTube Short.

- Hook (0–2.5s): `GTA 6 IS OUT` over the helicopter shot.
- Pitch (27–36s, 3s a line): `Make clips like this with AI` /
  `and earn money on make.fun` / `make.fun/bounty/gta6-clipper-01`.
- File: `gta6-clipper-01-final.mp4` (1080x1920, 36s, kept out of git).

## Upload (YouTube Short, Public)

**Title:** GTA 6 Is Out — 5-Star Police Chase (No Brakes)

**Description** (paste exactly — the first line is required verbatim):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

GTA 6 is finally out — and this 5-star police chase from Rockstar's official "An Extended Look" gameplay is the most GTA thing ever: Jason firing at cruisers from the back of the getaway car while Lucia drives.

makefun-citadel-crown-daybreak

#GTA6 #GrandTheftAutoVI #GTA6Gameplay #ViceCity #Shorts
```

**Tags:** GTA 6, Grand Theft Auto VI, GTA 6 gameplay, GTA 6 police chase, Vice City, Rockstar Games, GTA 6 Shorts, Shorts

**Visibility:** Public. Keep it public until the results are out (due 2026-12-07).

## VIDEO.json — AWAITING THE YOUTUBE URL

`VIDEO.json` still holds the placeholder `https://www.youtube.com/shorts/<id>`.
After the clip is uploaded, replace it with the real video address from
YouTube's Share button (Share > Copy), then the entry can be submitted.
See `UPLOAD-FOR-BOSS.md` for the upload steps.

## Run the program

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on
success. That is all the program has to do — the house reads the video's
views itself through the YouTube Data API.
