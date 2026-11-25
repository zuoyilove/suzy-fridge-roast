import { mkdirSync, writeFileSync } from "node:fs";

const line = "My fridge has had one job for ten years — keep things cold — and the only things it reliably produces now are a hum and a puddle on the floor.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
