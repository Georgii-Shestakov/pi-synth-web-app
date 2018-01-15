// server.js
const express = require('express');
const app = express();
const path = require('path');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

io.on('connection', function(client) {
    console.log('server connected');
    //appinit();
    client.on('msg', function(data) {
        console.log("received message", data);
        // if (data == 'silence') {
        //   panic();
      	// 	console.log('PANIC');
      	// } else if (data.slice(-3) == 'xiz') {
      	// 	changeinst(data);
      	// 	console.log('INST');
      	// } else {
      	// 	console.log(data);
      	// }
    });
});
