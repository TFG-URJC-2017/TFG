var shttp = require('socks5-https-client');
socksPort=9050;
shttp.get('https://www.google.com/', function(res) {
    res.setEncoding('utf8');
    res.on('readable', function() {
        console.log(res.read()); // Log response to console.
    });
});
