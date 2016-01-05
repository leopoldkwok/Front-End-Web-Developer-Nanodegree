var ob1 = {};

var ob2 = {};

ob1.example = function(arg1) {
	log(this, arg1);
};

ob1.example(ob2); // this is bound to the value that's on the left of the dotted call time e.g logs ob1 and ob2