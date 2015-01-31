// Prototypal pattern
Klass1 = function () {}
Klass1.prototype.foo = function () {
  console.log('foo');
}
Klass1.prototype.bar = function () {
  console.log('bar');
}

// Module pattern
Klass2 = function () {
  var foo = function () {
      console.log('foo');
  },
  bar = function () {
      console.log('bar');
  };

  return {
      foo: foo,
      bar: bar
  }
}


// Module pattern with cached functions
var FooFunction = function () {
  console.log('foo');
};
var BarFunction = function () {
  console.log('bar');
};

Klass3 = function () {
  return {
      foo: FooFunction,
      bar: BarFunction
  }
}

// Class conscructor
(function(){
    var exports = {};

    function privateUtil() {
            //...
    }

    exports.publicUtil = function() {
            //...
    };

    return exports;
})();