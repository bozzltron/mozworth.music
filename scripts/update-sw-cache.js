#!/usr/bin/env node
/**
 * Bump the PWA service-worker revision to force clients to refresh their cache.
 *
 * After changing cached assets, run this script then rebuild and deploy.
 * This script updates a SW_REVISION constant in app.config.ts which can be
 * referenced in the workbox config (e.g., as a `revision` value).
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const configPath = join(repoRoot, "app.config.ts");

const main = async () => {
  const original = await readFile(configPath, "utf8");
  const stamp = new Date().toISOString();

  const swRevisionRegex = /(const SW_REVISION\s*=\s*['"])([^'"]+)(['"]);?/;

  let updated;
  if (swRevisionRegex.test(original)) {
    updated = original.replace(swRevisionRegex, `$1${stamp}$3`);
    console.log(`Bumped service-worker cache revision to: ${stamp}`);
  } else {
    const importEndRegex = /((?:^|\n)import[^;]+;\s*\n)(?!import)/m;
    if (importEndRegex.test(original)) {
      updated = original.replace(
        importEndRegex,
        `$1\n// Bumped by npm run update-sw-cache — do not edit by hand\nconst SW_REVISION = '${stamp}';\n`
      );
    } else {
      updated = `// Bumped by npm run update-sw-cache — do not edit by hand\nconst SW_REVISION = '${stamp}';\n\n${original}`;
    }
    console.log(`Added service-worker cache revision: ${stamp}`);
  }

  await writeFile(configPath, updated, "utf8");
  console.log("");
  console.log("Next steps:");
  console.log("  1. Review the change to app.config.ts");
  console.log("  2. If using SW_REVISION in workbox config, ensure it is referenced (e.g., revision: SW_REVISION)");
  console.log("  3. Run: npm run build");
  console.log("  4. Deploy the new .output/ directory");
};

main().catch((err) => {
  console.error("Failed to update service-worker cache revision:", err);
  process.exit(1);
});
