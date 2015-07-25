var router = require("./route");
var server = require("./server");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.sayHello;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);
