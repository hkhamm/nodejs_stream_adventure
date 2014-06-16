var duplex = require('duplexer')
var through = require('through')

module.exports = function (counter) {
  var countries = {}

  function count(input) {
    countries[input.country] = (countries[input.country] || 0) + 1
  }

  function end() {
    counter.setCounts(countries)
  }

  return duplex(through(count, end), counter)
}
