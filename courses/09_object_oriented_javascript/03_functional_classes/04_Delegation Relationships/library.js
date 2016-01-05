var Car = function(loc) { // set the car location
	var obj = Object.create(Car.methods);
	obj.loc = loc;
	return obj;
};


Car.methods = {
	move : function() {
		this.loc++;
	}
};

// functions are capable of storing properties
// purpose of decluttering the methods object out of the global scope
// Car.methods is conveniently tucked away as a property of Car.

