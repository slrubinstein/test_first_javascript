function Calculator() {
	var result = 0;
	this.value = function() {
		return result;
	}
	this.add = function(num) {
		result = this.value() + num;
		return result;
	}
	this.subtract = function(num) {
		result = this.value() - num;
	}
}