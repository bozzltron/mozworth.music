import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the current timestamp as the cache key
const cacheTimestamp = Date.now();

// Read sw.js, replace the cache name line
const swPath = path.resolve(__dirname, '../public/sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');
swContent = swContent.replace(
  /const CACHE_NAME = "mozworth-v[0-9a-zA-Z]+";/,
  `const CACHE_NAME = "mozworth-v${cacheTimestamp}";`
);
fs.writeFileSync(swPath, swContent);

console.log(`Updated CACHE_NAME to mozworth-v${cacheTimestamp}`); 