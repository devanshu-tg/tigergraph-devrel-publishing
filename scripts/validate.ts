// npm run validate — checks every content file. Also runs automatically before every build,
// so a broken file can never be published.
import { validateAll } from "./_shared";

if (!validateAll()) process.exit(1);
