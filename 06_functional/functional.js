function countWords(string) {
  return string.split(' ').length;
}

function makeAdder(arg) {
  return function(val) {
    return arg + val;
  }
}

function forEach(array, func) {
  for(i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(array, func) {
  for(i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
  return array;
}

function filter(array, func) {
  var result = [];
  for(i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function contains(collection, value) {
  var array = [];
  if (collection instanceof Array) {
    array = collection;
  } else {
    for (key in collection) {
      array.push(collection[key]);
    }
  }

  for(i = 0; i < array.length; i++) {

    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

var countWordsInReduce = function(a, b) {
  return a.split(' ').length + b.split(' ').length;
}

var add = function(a, b) {
  return a+b;
};

function reduce(array, start, func) {

  while (array.length > start + 1) {
    var a = array.pop();
    var b = array.pop();
    array.push(func(a, b));
  }
  return array[start];
}

function sum(array) {
  return reduce(array, 0, add);
}

function every(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]) != true) {return false};
  }
  return true;
}


function any(array, func) {
  if (func != undefined) {
    for (var i = 0; i < array.length; i++) {
      if (func(array[i]) == true) {return true};
    }
    return false;
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == true) {return true};
    }
    return false;
  }
}

once = function(action) {
  action();
  return function action() {
    var num = 1;
  }
}

wrapper = function(hellofunc, blockfunc) {
    return function() {
        return blockfunc(hellofunc);
    }    
}
