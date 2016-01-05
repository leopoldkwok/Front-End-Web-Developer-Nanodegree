var Car = function(loc) { // set the car location
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};
