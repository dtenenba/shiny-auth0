var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
// httpProxy.createProxyServer({target:'http://localhost:2121'}).listen(8000); // See (†)

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
