var Interface = require('./interface_pattern.jsm');
var colors = require('colors/safe');

//NameInterface, [methods]
var Itest_interface = new Interface('Itest_interface', [
    'test1',
    'test2',
]);

function passed(text) {
    return console.log(colors.green(text));
}

function error(text) {
    return console.error(colors.red(text));
}
// implements Itest_interface
var test_interface = function() {
    this.test1 = function() {
        passed('test1 ok');
    };

    this.test2 = function() {
        passed('test2 ok');
    };
};
//not implements Itest_interface
var test_no_interface = function() {
    this.test3 = function() {
    };
};
var check_text = function(Itest_interface_Impl) {
    Interface.ensureImplements(Itest_interface_Impl, Itest_interface);
    Itest_interface_Impl.test1();
    Itest_interface_Impl.test2();
};


try {
    var Itest_interface_Impl = new test_interface();
    check_text(Itest_interface_Impl);
} catch (err) {
    error(err.message);
}

try {
    var Itest_interface_Impl = new test_no_interface();
    check_text(Itest_interface_Impl);
} catch (err) {
    passed('test3 ok :'+err.message);
}
