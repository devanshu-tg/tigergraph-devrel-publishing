// npm run stamp — run after adding or editing content.
// Sets updated_at to "now" on every file you changed, registers new files, then validates.
import { runStamp, validateAll } from "./_shared";

console.log("Stamping changed files:");
const stamped = runStamp();
console.log("");
const valid = validateAll();
if (!stamped || !valid) process.exit(1);
