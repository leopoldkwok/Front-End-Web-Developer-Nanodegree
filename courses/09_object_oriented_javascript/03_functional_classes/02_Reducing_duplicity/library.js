var Car = function(loc) { // set the car location
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};

var move = function() {
	this.loc++; // this replaces obj because this function is being called as a method on objects created with Car.
};
