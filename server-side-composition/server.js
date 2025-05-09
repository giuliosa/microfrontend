const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Função para carregar arquivos HTML simulando microfrontends
const loadMF = (file) => {
  return fs.readFileSync(path.join(__dirname, "microfrontends", file), "utf8");
};

app.get("/", (req, res) => {
  const header = loadMF("header.html");
  const content = loadMF("content.html");
  const footer = loadMF("footer.html");

  // Composição no servidor
  const page = `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server-side Composition</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; }
            header, footer { background: #333; color: white; padding: 10px; }
            main { padding: 20px; }
        </style>
    </head>
    <body>
        ${header}
        ${content}
        ${footer}
    </body>
    </html>
  `;

  res.send(page);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
