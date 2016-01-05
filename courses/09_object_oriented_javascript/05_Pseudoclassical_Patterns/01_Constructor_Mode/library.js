var Car = function(loc) { // set the car location
	// this = Object.create(Car.prototype); - with using New this line is used invisibliy
	this.loc = loc;

	// retrn this; - with using New this line is used invisibly
};


Car.prototype.move = function() {
		this.loc++;
};