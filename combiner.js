var combine = require('stream-combiner')
var split = require('split')
var through = require('through')
var zlib = require('zlib')

module.exports = function () {
  var genre

  function write(input) {
    if (input.length == 0) {
      return
    }
    input = JSON.parse(input)
    if (input.type == 'genre') {
      if (genre) {
        this.queue(JSON.stringify(genre) + '\n')
      }
      genre = {name: input.name, books: []}
    } else if (input.type == 'book') {
      genre.books.push(input.name)
    }
  }

  function end() {
    if (genre) {
      this.queue(JSON.stringify(genre) + '\n')
    }
    this.queue(null)
  }

  return combine(split(), through(write, end), zlib.createGzip())
}
