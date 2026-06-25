import fs from "node:fs";
import { Parcel } from "@parcel/core";
import { zip } from "zip-a-folder";

fs.closeSync(fs.openSync("./dist/astro/package-lock.json", "w"));
fs.rmSync("./dist/parcel", { recursive: true, force: true });

const parcel = new Parcel({
  defaultConfig: "@parcel/config-default",
  entries: "./dist/astro/**/*.html",
  mode: "production",
  shouldContentHash: false,
  defaultTargetOptions: {
    publicUrl: "./",
    distDir: "./dist/parcel",
    sourceMaps: false,
    shouldOptimize: false,
    shouldScopeHoist: false,
  },
  additionalReporters: [
    {
      packageName: "@parcel/reporter-cli",
      resolveFrom: import.meta.url,
    },
  ],
});

await parcel.run().catch(() => {});

await zip("./dist/parcel", undefined, {
  customWriteStream: fs.createWriteStream("./dist/description.zip"),
});
await zip(".", undefined, {
  exclude: ["**/.*", "**/.*/**", "dist/**", "node_modules/**"],
  customWriteStream: fs.createWriteStream("./dist/description-source.zip"),
});
