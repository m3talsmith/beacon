function Pattern (method, path) {
  if(!path) throw new Error('pattern must have a path');

  this.method = method;
  this.path   = path;

  this.fragments = path.split('/').filter(function (fragment) {
    return fragment !== '';
  });

  this.attributes = this.fragments.filter(function (fragment) {
    return fragment.match(/^\:/);
  }).map(function (attribute) {
    return attribute.replace(/\:/, '');
  });

  return this;
};

module.exports = Pattern;
