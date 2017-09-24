var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  // console.log("holy shit");
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  proxyReq.setHeader('SCRIPT_NAME', 'you');
});

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req.url);
  if (req.url == "/user") {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("dante");
  } else {
      proxy.web(req, res, {
        target: 'http://shiny:3838'
      });
  }
});

console.log("listening on port 5050")
server.listen(5050);
