var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
    //get the http request
    //when the data is received print to console
    https.get(requestOptions, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        console.log(data.concat('\n'));
      })
    })

}
getAndPrintHTMLChunks()
