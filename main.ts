// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself: the house reads VIDEO.json from this
// repository, then reads the video's views through the YouTube Data API.
// This program does nothing but copy VIDEO.json from the repository root
// into the output directory, where the gate reads it.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository: both runs of
// the entry write the same bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

if (!existsSync(SOURCE)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json instead of copying a bad file:
// the gate only accepts a JSON object with a YouTube video url.
const parsed = JSON.parse(readFileSync(SOURCE, 'utf8')) as unknown;
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
