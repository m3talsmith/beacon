var Pattern = require('./lib/pattern');

function Router () {
  var self = this;

  this.patterns = [];

  this.add = function (method) {
    var pattern = new Pattern(method);
    self.patterns.push(pattern);

    return pattern;
  };

  this.find = function (method) {
    var results = self.patterns.filter(function (pattern) {
      return pattern.method === method;
    });

    return results;
  };

  return this;
}

module.exports = Router;
