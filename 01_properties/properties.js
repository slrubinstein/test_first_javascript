function setSomePropertiesOn(object) {
	object.x = 7;
	object['y'] = 8;
	object.onePlus = function (param) {
		return param + 1;
	}
}