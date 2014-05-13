var Pattern = require('./pattern');

function Router () {
  var self = this;

  this.patterns = [];

  this.add = function (method, url) {
    var pattern = new Pattern(method, url);
    self.patterns.push(pattern);

    return pattern;
  };

  this.get    = function (url) { return self.add('get', url); };
  this.post   = function (url) { return self.add('post', url); };
  this.put    = function (url) { return self.add('put', url); };
  this.delete = function (url) { return self.add('delete', url); };

  this.find = function (method) {
    var results = self.patterns.filter(function (pattern) {
      return pattern.method === method;
    });

    return results;
  };

  return this;
}

module.exports = Router;
