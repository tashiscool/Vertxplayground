/**
 * @author Tash
 */

load('vertx.js')

vertx.createHttpServer().requestHandler(function(req) {
    var file = req.path === '/' ? 'index.html' : req.path;
    req.response.sendFile('webroot/' + file);
}).listen(8080)