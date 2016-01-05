// Car function

var Car = function(loc) {
	this.loc = loc;
};

// prototype chains is good for saving memory
Car.prototype.move = function() {
	this.loc++;
};


var Van = function(loc) {
	Car.call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grab = function() { /*... */};


