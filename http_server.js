var http = require('http')
var through = require('through')

function handleInput (request, response) {
  if (request.method == 'POST') {
    request.pipe(through(function (input) {
        this.queue(input.toString().toUpperCase())
    })).pipe(response)
  } else {
    request.end()
  }
}

http.createServer(handleInput).listen(process.argv[2])
