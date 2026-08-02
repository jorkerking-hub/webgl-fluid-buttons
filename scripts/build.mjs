import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [template, fluidSource] = await Promise.all([
  readFile(resolve(root, "src/index.template.html"), "utf8"),
  readFile(resolve(root, "src/fluid.js"), "utf8"),
]);

const marker = "__FLUID_SOURCE_JSON__";
if (!template.includes(marker)) {
  throw new Error(`Missing template marker: ${marker}`);
}

await writeFile(
  resolve(root, "index.html"),
  template.replace(marker, JSON.stringify(fluidSource)),
);

console.log("Built index.html");
