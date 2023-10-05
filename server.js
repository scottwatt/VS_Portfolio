const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enforce HTTPS
  server.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && !dev) {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    } else {
      return next();
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});