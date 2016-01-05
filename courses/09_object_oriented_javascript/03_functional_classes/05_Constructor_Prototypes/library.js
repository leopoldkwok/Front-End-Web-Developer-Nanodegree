var Car = function(loc) { // set the car location
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
};


Car.prototype.move = function() {
		this.loc++;
};

// functions are capable of storing properties
// purpose of decluttering the methods object out of the global scope
// Car.methods is conveniently tucked away as a property of Car.

