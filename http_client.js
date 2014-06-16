var request = require('request')

var source = process.stdin
var destination = process.stdout
var post_request = request.post('http://localhost:8000')

source.pipe(post_request).pipe(destination)
