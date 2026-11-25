// The 3AM Fridge Text — make.fun bounty entry.
// Writes the single fridge text to /output/entry.txt (no trailing newline)
// and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts so the setup earns the twist:
// the fridge grieves the milk, then eats the tribute itself.
const SETUP =
  "3AM. You opened me 11 times tonight and took nothing. I have started charging rent in leftovers, ";
const PUNCH = "payable in silence.";
const LINE = SETUP + PUNCH;
const LIMIT = 140; // chars, per the bounty brief

function main(): void {
  if (LINE.length < 1 || LINE.length > LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
