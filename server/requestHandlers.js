var exec = require("child_process").exec;

function start(response) {
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Please start your upload");
  response.end();
}

function upload(response) {//demo for blocking request
  console.log("Function upload called");
  exec("ls -alh", function(error, stdout, stderr){
    // sleep(10000);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write(stdout);
    response.end();
  });
}

function sayHello(response) {
  console.log("Function say hello called");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("WELCOME TO NODE JS HTTP SERVER");
  response.end();
}

function health(response) {
  response.writeHead(200,{'Content-Type':"text/plain"});
  response.write("ok");
  response.end();
}

function champions(response) {
  response.writeHead(200,{'Content-Type':"application/json"});
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.sayHello = sayHello;
exports.health = health;
exports.champions = champions;
