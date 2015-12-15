// $("#main").append("Leopold Kwok");

// [string].replace([old], [new])

// var name = "James";

var email = "cameron@udacity.com";

var newEmail = email.replace("udacity", "gmail");

console.log(email);

console.log(newEmail);

var awesomeThoughts = "My name is Cameron and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

$("#main").append(funThoughts);



var name = "Leopold";

var role = "Junior Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "JS"];

// $("#main").append(skills);

// $("#main").append(skills[0]);

$("#main").append(skills.length);


// object declaration

var bio = {
	"name" : "Leopold Kwok",
	"role" : "Junior Web Developer",
	"contacts": {
		"mobile": "0778-999-5094",
		"email": "leopoldkwok@gmail.com",
		"github": "leopoldkwok",
		"twitter": "@leopoldkwok",
		"location": "London"
	},
	"welcome message" : "Hello World!",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
};

// $("#main").append(bio.name);

// bio.city = "Mountain View";
// bio.email = "leopold.kwok@gmail.com";

bio["city"] = "Mountain View";
bio["email"] = "james.williams@udacity.com";

$("#main").append(bio.city);




