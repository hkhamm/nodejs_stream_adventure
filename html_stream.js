var through = require('through')
var trumpet = require('trumpet')

var tr = trumpet()

process.stdin.pipe(tr)

var stream = tr.select('.loud').createStream()
stream.pipe(through(function (input) {
  this.queue(input.toString().toUpperCase())
})).pipe(stream)

tr.pipe(process.stdout)
