var https = require('https');

function getAndPrintHTMLChunks(){

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions,function(chunk){

  chunk.setEncoding('utf8');
  chunk.on('data',function(data){
    console.log('Chunk received:', data);
    console.log("\n");
  });

  chunk.on('error',function(err){
    console.log("Error:",err);
  });

  chunk.on('end',function(){
    console.log('Response stream complete.');
  });


});


}


getAndPrintHTMLChunks();