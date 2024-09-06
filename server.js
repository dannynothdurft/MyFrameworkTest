import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import open from "open";

// __dirname für ES-Module erstellen
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server-Konfiguration
const hostname = "127.0.0.1";
const port = 3000;

// Funktion zum Bedienen von Dateien
const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Prüfe, ob die Datei im src-Ordner liegt
  if (req.url.startsWith("/src/")) {
    filePath = path.join(__dirname, "src", req.url.slice(4));
  }

  let extname = String(path.extname(filePath)).toLowerCase();
  let mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };

  let contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 - File Not Found", "utf-8");
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Server starten
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  // Browser öffnen, wenn der Server gestartet wird
  open(`http://${hostname}:${port}/`);
});
