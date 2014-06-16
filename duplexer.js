var duplex = require('duplexer')
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    var child = spawn(cmd, args)
    return duplex(child.stdin, child.stdout)
}
