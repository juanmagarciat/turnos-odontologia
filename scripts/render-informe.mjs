import { marked } from "marked";
import { readFileSync, writeFileSync } from "node:fs";

const md = readFileSync("docs/discovery/informe-discovery.md", "utf8");
const body = marked.parse(md);
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Informe de discovery</title>
  <style>
    body { font-family: Georgia, serif; max-width: 920px; margin: 2rem auto; line-height: 1.45; color: #111; }
    table { border-collapse: collapse; width: 100%; font-size: 11px; }
    td, th { border: 1px solid #ccc; padding: 4px 6px; vertical-align: top; }
    h1, h2, h3 { page-break-after: avoid; }
  </style>
</head>
<body>
${body}
</body>
</html>`;
writeFileSync("docs/discovery/informe-discovery.html", html);
