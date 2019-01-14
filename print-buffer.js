var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

    //get the http request
    //when the data is received write to a buffer var
    https.get(requestOptions, function (response) {

      var result = '';
      response.setEncoding('utf8');
      response.on('data', function (data) {
        result += data;
      })
      response.on('end', function(){
        console.log("Print buffer: ", result);
      })
    })
}
getAndPrintHTML()