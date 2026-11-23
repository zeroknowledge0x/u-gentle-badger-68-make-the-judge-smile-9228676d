// Make the Judge Smile - one warm, surprising line about a small good thing today.
// Deterministic: no clock, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My neighbour, who once complained about my cello, left soup at my door today. Her note: 'fever sounds worse than the cello. Get well soon.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
