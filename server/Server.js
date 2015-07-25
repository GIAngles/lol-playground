var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received");
        response.writeHead(200,{"content-type":"application/json"});
        response.write("Welcome you to the node server");
        response.end();
    }
    http.createServer(onRequest).listen(8008);
}
console.log("Server started");

exports.start = start;
