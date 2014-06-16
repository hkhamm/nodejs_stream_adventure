var through = require('through')
var split = require('split')

var count = 0

function write (input) {
  var output
  if (count % 2 == 0) {
    output = input.toString().toLowerCase()
  } else {
    output = input.toString().toUpperCase()
  }
  count++
  this.queue(output + '\n')
  // console.log(output)
}

process.stdin.pipe(split())
    .pipe(through(write))
    .pipe(process.stdout)
