(function () {
  var root = typeof module !== 'undefined' && module.exports ? global : this;
  root.backdoor = function (evaluator) {
    var name = evaluator.name;
    if (!name) throw new Error('backdoor argument function must have a name');
    root.backdoor[name] = root.backdoor[name] = evaluator;
  };

}.call(this));