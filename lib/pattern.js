function Pattern (method, url) {
  if(!url) throw new Error('pattern must have a path');
  this.method = method;

  return this;
};

module.exports = Pattern;
