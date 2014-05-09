var mocha  = require('mocha'),
    assert = require('assert'),
    Router = require('../index');

describe('Router', function () {
  describe('#new', function () {
    it('returns a router instance', function () {
      var router = new Router();
      assert(router instanceof Router);
    });
  });

  describe('instance', function () {
    var router;

    beforeEach(function () {
      router = new Router();
    });

    it('has patterns', function () {

    });

    describe('pattern', function () {
      it('can have a method');
      it('must have a path');

      it('path can have tokens', function () {
        var tokenizedPath = '/post/:id/comment/:commentId';
      });

      it('must have a callback');
      it('can have callback arguments');
      it('compiles the path to a regex');
    });

    it('adds a pattern');
    it('finds a pattern');

    describe('#find(method, path)', function () {
      it('finds by a method');
      it('finds by a path');
      it('finds by method first if it exists');
      it('breaks up pattern into fragments');
      it('extracts values with tokens from path');
      it('returns result');

      describe('result as {}', function () {
        it('has the pattern broken up into fragments as .fragments');
        it('has variables extracted from the path with tokens as .variableName where variableName is replaced with the :token minus the semi-colon');
        it('has the path as .path');
        it('has a compiled regex as .regex');
        it('has a regex compiling function as .compileRegExp');
      });
    });

    describe('#process(method, path)', function () {
      it('finds a matching pattern');
      it('does not find a matching pattern');
      it('calls the callback of a matching pattern');
      it('calls the callback of a matching pattern with additional stored arguments');
    });
  });
});
