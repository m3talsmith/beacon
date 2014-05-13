var Pattern = require('./pattern');

function Router () {
  var self = this;

  this.patterns = [];

  this.add = function (method, path) {
    var pattern = new Pattern(method, path);
    self.patterns.push(pattern);

    return pattern;
  };

  this.get    = function (path) { return self.add('get', path); };
  this.post   = function (path) { return self.add('post', path); };
  this.put    = function (path) { return self.add('put', path); };
  this.delete = function (path) { return self.add('delete', path); };

  this.find = function (method) {
    var results = self.patterns.filter(function (pattern) {
      return pattern.method === method;
    });

    return results;
  };

  return this;
}

module.exports = Router;
