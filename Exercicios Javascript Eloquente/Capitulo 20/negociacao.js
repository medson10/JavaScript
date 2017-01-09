var http = require('http');
var readStreamAsString = require('./readStream.js');

var types = ['text/plain', 'text/html', 'application/json'];

types.forEach(function(type) {
  http.request({
    hostname: 'eloquentjavascript.net',
    path: '/author',
    headers: {Accept: type}
  }, function(response) {
    if (response.statusCode != 200) {
      console.error('Request for ' +  type + ' failed: ' + response.statusMessage);
      return;
    }
    readStreamAsString(response, function(error, content) {
      if (error) {
        throw error;
      }
      console.log("Type " + type + " : " +  content);
    });
  }).end();
});
