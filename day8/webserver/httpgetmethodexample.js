import http from 'node:http';
const hostname="127.0.0.1";
const port="8080";
const url = 'http://'+hostname+':'+port;
console.log(url);
//We have written http.get method or function to handle the http get request
http.get(url, (res) => {
    console.log("Line number 8 ");
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
  
    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.log("Line number 23 ");
      console.error(error.message);
      // Consume response data to free up memory
      res.resume();
      return;
    }
  
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });

const server = http.createServer((req, res) => {
    console.log(JSON.stringify(req.headers));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      "data": 'Hello World!',
    }));
  });
  
  server.listen(8080,hostname,() => {
    console.log('Listening on '+hostname+':'+port);
  }); 