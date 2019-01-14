var https = require('https');

function getAndPrintHTML (options) {
    //get the http request
    //when the data is received write to a buffer var
  https.get(options, function (response) {

    var result = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
      result += data;
    })
    response.on('end', function(){
      console.log(result);
    })
  })
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}
getAndPrintHTML(requestOptions)