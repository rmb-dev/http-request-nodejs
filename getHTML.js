function getHTML (options, callback) {
  var https = require('https');
  var result = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      result = (result + data.toString() + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(result);
    });

    response.on('error', function(err) {
      console.log(err.stack);
    });

  });

};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);