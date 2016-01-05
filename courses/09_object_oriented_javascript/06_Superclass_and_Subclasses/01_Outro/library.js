// Super Class
var Car = function(loc) { // set the car location
	var obj = {loc: loc};
	obj.move = function() {
		obj.loc++;
	};
	return obj;
};


// sub class

var Van = function(loc) {
	var obj = Car(loc);
	obj.grab = function { /*.. */ };
	return obj;
};

// sub class

var Cop = function(loc) {
	var obj = Car(loc);
	obj.call = function() { /*...*/ };
	return obj;
};