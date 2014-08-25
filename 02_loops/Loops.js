function repeat(param, reps) {
	var result = "";
	for(var i = 1; i <= reps; i++) {
		result += param;
	}
	return result;
}

function join(array, delin) {
	var result = '';
	delin = delin || '';
	for (var i = 0; i < array.length; i++) {
		result += array[i];
		if (i != array.length - 1) {
			result += delin;
		}
	}
	return result;
}

function sum(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
}

function paramify(hash) {
	var result = '';
	var array = [];
	for (key in hash) {
		if (hash.hasOwnProperty(key)) {
			array.push([key, hash[key]]);
		}
	}
	array.sort();
	for (var i = 0; i < array.length; i++) {
		result += array[i][0];
		result += '=';
		result += array[i][1];
		if (i < array.length - 1) {
			result += '&';
		}
	}
	return result;
}

function factorial(num) {
	var result = 1;
	for(var i = num; i > 0; i--) {
		result *= i;
	}
	return result;
}

function concat_string(str) {
	var result = '';
	for(var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}