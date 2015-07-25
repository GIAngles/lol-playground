function route(handle, pathname, response) {
  console.log("Request route path:" + pathname);
  if(typeof handle[pathname] === 'function') {
    return handle[pathname](response);
  } else {
    return "No request handler for path: " +pathname;
  }
}
exports.route = route;
