// Tell a Whole Story in 32 Characters
// Entry: a Wi-Fi network name that tells a whole story.
//
// Revision: swap the breakup for a divorce, and the cat for
// the house. "Divorced" does the heavy lifting — one word that
// brings a marriage, a split and a settlement with it — and
// the settlement itself becomes the joke: she got the house,
// the narrator got the Wi-Fi. House versus Wi-Fi is a real
// contrast in value, which is exactly why the narrator's
// share is funny, and a reader fills in the whole story:
// who left, what was argued over, and who is now broadcasting
// this name from a much smaller place.
//
// The name has to work in a phone's network list: short words,
// no explanation, and a twist a stranger gets on first read.
// At exactly 32 characters every character earns its place;
// "me WiFi" drops the verb because the parallel with
// "she got house" already carries it.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Divorced: she got house, me WiFi";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
// Gate: UTF-8 text of 1 to 32 characters, not only whitespace.
const text = line.trim();
if (text.length < 1 || text.length > 32 || text.includes("\n")) {
  throw new Error(`entry must be 1-32 characters on one line, got ${text.length}`);
}
writeFileSync(`${out}/entry.txt`, text + "\n");
