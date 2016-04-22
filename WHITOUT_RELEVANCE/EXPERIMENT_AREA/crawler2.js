var Agent = require('socks5-https-client/lib/Agent');

var request = require('request');

request({
    url: process.argv[2],
    strictSSL: true,
    agentClass: Agent,
    agentOptions: {
        socksHost: 'localhost', // Defaults to 'localhost'.
        socksPort: 9050 // Defaults to 1080.
    }
}, function(err, res, body) {
    console.log("conectando");
    console.log(err || body);
});
/*
var shttp = require('socks5-https-client');

shttp.get('https://www.google.com/', function(res) {
    res.setEncoding('utf8');
    res.on('readable', function() {
        console.log(res.read()); // Log response to console.
    });
});
*/
