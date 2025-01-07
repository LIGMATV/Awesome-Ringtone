import { exec } from "child_process";
import { readFileSync } from "fs";

const [brand, year] = process.argv.slice(2);

if (!(brand && year)) {
    console.error("Usage: npm run open -- <brand> <year>");
    process.exit(1);
}

try {
    const scripts = JSON.parse(readFileSync("package.json", "utf-8")).scripts;
    const url = scripts ? . [`open:${brand}:${year}`];

    if (!url) throw new Error("Ringtone not found!");
    exec(`open-cli ${url}`, (err) => err && console.error("Error:", err.message));
} catch (err) {
    console.error((err as Error).message);
}