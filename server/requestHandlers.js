var exec = require("child_process").exec;

function start(response) {
  response.writeHead(200,{"Content-Type":"application/json"});
  response.write("Please start your upload");
  response.end();
}

function upload(response) {//demo for blocking request
  console.log("Function upload called");
  function sleep(milisecond) {
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime+milisecond);
  }
  exec("ls -alh", function(error, stdout, stderr){
    // sleep(10000);
    response.writeHead(200,{"Content-Type":"application/json"});
    response.write(stdout);
    response.end();
  });


}

function sayHello(response) {
  console.log("Function say hello called");
  response.writeHead(200,{"Content-Type":"application/json"});
  response.write("WELCOME TO NODE JS HTTP SERVER");
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.sayHello = sayHello;
