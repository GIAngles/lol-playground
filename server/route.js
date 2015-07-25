function route(handle, pathname, response) {
  console.log("Request route path:" + pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    response.writeHead(200,{"Content-Type":"application/json"});
    response.write("No request handler for path: " +pathname);
    response.end();
  }
}
exports.route = route;
