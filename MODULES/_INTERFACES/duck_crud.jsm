var Interface  = require('./interface_pattern');

//NameInterface, [methods]
var ICrud = new Interface('ICrud', [

    'cretate',

    'read',

    'update',

    'delete'
]);

//exports
module.exports = ICrud;
