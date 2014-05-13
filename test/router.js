var mocha   = require('mocha'),
    assert  = require('assert'),
    Router  = require('../index'),
    Pattern = require('../lib/pattern');

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
      assert(router.patterns);
    });

    it('adds a pattern', function () {
      var findPattern = function (method) {
        return router.patterns.filter(function(pattern){ return pattern.method === method; })[0];
      };

      assert(!findPattern('get'));

      var pattern = router.add('get', '/test');

      assert(pattern);
      assert(pattern.method === 'get');
      assert(findPattern('get'));
    });

    it('finds a pattern', function () {
      assert(router.find);
      assert(router.find('get').length === 0);

      var pattern = router.add('get', '/test');

      assert(router.find('get').length === 1);
      assert(router.find('get')[0] === pattern);
    });

    it('adds a pattern with #get', function () {
      var pattern = router.get('/test');

      assert(router.find('get')[0] === pattern); 
    });

    it('adds a pattern with #post', function () {
      var pattern = router.post('/test');

      assert(router.find('post')[0] === pattern); 
    });

    it('adds a pattern with #put', function () {
      var pattern = router.put('/test');

      assert(router.find('put')[0] === pattern); 
    });

    it('adds a pattern with #delete', function () {
      var pattern = router.delete('/test');

      assert(router.find('delete')[0] === pattern); 
    });

    describe('pattern', function () {

      /* Pattern layout
       * ==============
       *
       * {
       *   method: 'get',
       *   path: '/post/:postId/comment/:id',
       *   callback: [Function],
       *   arguments: ['abc', 123, [Function], [Object]],
       *   regexp: '/\/post\/(\:postId)\/comment\/(\:id)/',
       *   fragments: ['post', ':postId', 'comment', ':id'],
       *   attributes: ['postId', 'id'],
       *   compileRegExp: [Function]
       * }
       *
       */

      var pattern;

      afterEach(function () {
        pattern = null;
      });

      it('can have a method', function () {
        pattern = new Pattern('get', '/test');
        assert(pattern.method === 'get');
      });

      it('must have a path', function () {
        try {
          pattern = new Pattern('get');
          assert(false);
        } catch (e) {
          assert(e.message === 'pattern must have a path');

          pattern = new Pattern('get', '/test');
          assert(pattern);
          assert(pattern.method === 'get');
          assert(pattern.path === '/test');
        }
      });

      it('path can have tokens', function () {
        var tokenizedPath = '/post/:id/comment/:commentId';
  
      });

      it('must have a callback');
      it('can have callback arguments');
      it('compiles the path to a regex');
    });

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
