const express = require('express')
const app = express();
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const nextRoute = next({ dev });
const handle = nextRoute.getRequestHandler();
const https = require('https');
const http = require('http');

nextRoute.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(80, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:80')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});

app.use(express.static(__dirname + '/pages/'));
app.use(express.static(__dirname + '/static/'));
app.use(express.static(__dirname + '/node_modules/'));