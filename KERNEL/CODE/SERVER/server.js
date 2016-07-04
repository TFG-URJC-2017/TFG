var http = require('http');
var fs = require('fs'); // sistema de archivo
var path = require('path'); // path
function start() {
  function onRequest(request, response){
    var ruta = '.' + ((request.url=='/') ? '/index.html' : request.url);
    var extension =path.extname(ruta); // obtiene la extension del archivo
    var contentType = 'text/html';
    switch (extension){
        case '.js':
             contentType = 'text/javascript';
             break;
        case '.css':
             contentType = 'text/css';
    }
    path.exists(ruta,function(bExist){
        if(bExist)
        {
          fs.readFile(ruta, function(bError,content){
              if(bError)  {
                  response.writeHead(500);
                  response.end();
              }
              else  {
                  response.writeHead(200,{'content-Type' : contentType});
                  response.end(content);
              }
          });
        }
        else{
            response.writeHead(404); response.end();
        }
      });
    }

  http.createServer(onRequest).listen(8888);
}
exports.start = start;
