const { existsSync, readFileSync } = require("node:fs");
const { join, resolve } = require("node:path");

const root = resolve(__dirname, "..");
const requiredFiles = [
  "dist/index.html",
  "dist/_headers",
  "dist/_redirects",
  "dist/assets/app-icon.png",
  "dist/assets/intro.mp4",
  "src/App.jsx",
  "src/data/translations.js",
];

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (missing.length) {
  throw new Error(`Missing required files: ${missing.join(", ")}`);
}

const translations = readFileSync(join(root, "src/data/translations.js"), "utf8");
const app = readFileSync(join(root, "src/App.jsx"), "utf8");

const requiredText = [
  "Pharmacy Training Tracker",
  "Activation codes are issued only after payment confirmation in our account. Receipt screenshots alone are not final proof of payment.",
  "تصدر رموز التفعيل فقط بعد تأكيد وصول الدفع إلى حسابنا",
  "fullName",
  "qiSender",
  "receipt",
  "roleOptions",
  "v1.0.0",
  "/downloads/pharmacy-training-tracker-v1.0.0.apk",
  "Installation instructions",
];

const missingText = requiredText.filter((text) => !translations.includes(text));

if (missingText.length) {
  throw new Error(`Missing required translation text: ${missingText.join(", ")}`);
}

if (!app.includes("document.documentElement.dir") || !app.includes("document.documentElement.lang")) {
  throw new Error("Language direction and lang attributes are not wired in App.jsx");
}

console.log(
  JSON.stringify(
    {
      ok: true,
      checkedFiles: requiredFiles.length,
      bilingualCopy: true,
      cloudflareOutput: "dist",
    },
    null,
    2,
  ),
);
