function Calculator() {
  this.result;
  this.array = [];
  this.value = function() {
    return this.result;
  }

  this.push = function(num) {
    this.array.push(num);
  }

  this.plus = function(num) {
    if (this.array.length == 0)
      throw "calculator is empty";
    var a = this.array.pop();
    var b = this.array.pop();
    this.result = a + b;
    this.array.push(this.result);
    return this.result;
  }

  this.minus = function(num) {
    if (this.array.length == 0)
      throw "calculator is empty";
    var a = this.array.pop();
    var b = this.array.pop();
    this.result = b - a;
    this.array.push(this.result);
    return this.result;
  }

  this.divide = function(num) {
    if (this.array.length == 0)
      throw "calculator is empty";
    var a = this.array.pop();
    var b = this.array.pop();
    this.result = b / a;
    this.array.push(this.result);
    return this.result;
  }

  this.times = function(num) {
    if (this.array.length == 0)
      throw "calculator is empty";
    var a = this.array.pop();
    var b = this.array.pop();
    this.result = a * b;
    this.array.push(this.result);
    return this.result;
  }
}