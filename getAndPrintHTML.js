var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var result = '';

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      // result =  result + data.toString() + '\n';
      //console.log(data);
      result = (result + data.toString() + '\n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(result);
    });

    response.on('error', function(err) {
      console.log(err.stack);
    });


  });
//why could not put the console.log here?
// return console.log(result);

};

getAndPrintHTML();