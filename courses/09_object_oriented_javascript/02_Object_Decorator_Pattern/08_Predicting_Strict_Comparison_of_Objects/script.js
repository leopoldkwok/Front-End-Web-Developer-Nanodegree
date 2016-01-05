var makeAnObject = function() {
	return {
		example: 'property'
	};
};

var ob1 = makeAnObject();
var ob2 = makeAnObject();
console.log(ob1 === ob2); // What do you think? Answer: they are different objects

