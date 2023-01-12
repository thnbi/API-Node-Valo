import http from 'http';

const port = 3000;

const rotas = {
   '/': 'hello world',
   '/skins': 'skins de valorant',
   '/champions': 'jett>>>',
   '/maps': 'mapas de valorant'
}

const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end(rotas[req.url] || 'Page not found!');
});

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});
