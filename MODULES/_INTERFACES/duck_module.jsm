var Interface = require('./interface_pattern.jsm');
//NameInterface, [methods]
var IModuloWiew = new Interface('IModuloWiew', [
    info,

    view_complete,
    view_icon,
    view_resume,
    getCSS,
    setCSS,
    getSettings,
    setSettings,

    refresh,
    push,
    reset
]);
//exports
module.exports = IModuloWiew;
