var Car = function(loc) {
	this.loc = loc;
};
// prototype chains is good for saving memory
Car.prototype.move = function() {
	this.loc++;
};