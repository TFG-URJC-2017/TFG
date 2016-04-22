var serialNumber = require('serial-number');
var crc32 = require('js-crc').crc32;

serialNumber.preferUUID = true;
serialNumber(function (err, value) {
	console.log(value);
	console.log(crc32(value));
});
