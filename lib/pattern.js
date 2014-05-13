function Pattern (method, path) {
  if(!path) throw new Error('pattern must have a path');
  this.method = method;
  this.path   = path;

  return this;
};

module.exports = Pattern;
