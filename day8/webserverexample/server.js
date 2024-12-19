const http = require('http');//import or include the http module
//http module has a createServer function to create a server and logic to handle req and res
const server = http.createServer(
    function (req,res) {
        //Write logic to prepare response   
        res.statusCode = 200;//Http Status code 200 means successfully request is processed
        res.setHeader('Content-Type', 'text/plain');//setting the content type in Http Response header 
        res.end('Hello World'); //sending the text or data in response body to be rendered on the browser
    }
);
//http server by default runs on 8080 port
server.listen(5000);


