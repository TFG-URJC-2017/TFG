var Interface  = require('./interface_pattern');
//NameInterface, [methods]
var IRemote = new Interface('IRemote',
[
  //return the status of service
    'getStatus',
    //allows to manipulate the configuration settings
    'getConfig',
    'setConfig',
    //list these methods
    'help',
    /*
     * return relevant information about the module
     * as author, version, last update, logfile...
     */
    'info',
    //start the service
    'start',
    //stop the service
    'stop'
]);
//exports
module.exports = IRemote;
