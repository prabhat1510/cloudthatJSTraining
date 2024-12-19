import {createServer} from 'node:http';
const hostname="127.0.0.1";
const port="8080";
//creating a server and preparing the response
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
      }));

});
//Server will listen the request on a particular port
server.listen(port, hostname, () => {
    console.log('Listening on '+hostname+':'+port);
  });