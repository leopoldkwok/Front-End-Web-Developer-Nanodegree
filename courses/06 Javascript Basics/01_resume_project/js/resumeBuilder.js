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

var bio = {
	"name" : "James",
	"age" : 32,
	"skills" : skills
};

$("#main").append(bio.name);



