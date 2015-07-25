var router = require("./server/route");
var server = require("./server/server");
var requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.sayHello;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);
