var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {

    var result = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
      result += data;
    })
    response.on('end', function(){
      callback(result);
    })
  })
};
