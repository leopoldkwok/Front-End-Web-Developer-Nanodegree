var Car = function(loc) { // Name your class with a capital e.g Car
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};
