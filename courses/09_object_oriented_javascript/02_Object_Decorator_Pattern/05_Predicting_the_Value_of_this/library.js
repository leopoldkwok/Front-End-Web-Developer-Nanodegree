// Refactor the carlike function in a way
// that allows you to use the method calling
// syntax with "dot access" as we do below.

var carlike = function(obj, loc) { // set the car location
	obj.loc = loc;
	obj.move = move;
	return obj;
};

var move = function() {
	this.loc++; // this will be bounded to ben as its the last object calling move
};

