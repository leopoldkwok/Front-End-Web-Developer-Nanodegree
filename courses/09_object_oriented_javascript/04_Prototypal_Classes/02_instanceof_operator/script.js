var Dog = function() {
	return {legs: 4, bark: alert}; // written in functional style - object literal so delegates to object.prototype
};

var fido = Dog();

console.log(fido instanceof Dog); // Dog.prototype cannot be found