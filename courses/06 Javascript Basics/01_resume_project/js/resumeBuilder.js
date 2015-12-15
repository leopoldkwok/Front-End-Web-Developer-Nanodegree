var bio = {
	"name":"John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile":"650-555-5555",
		"email": "john@example.com",
		"github":"johndoe",
		"twitter":"@johndoe",
		"location":"San Francisco"
	},
	"welcomeMessage": "Lorem ipsum dolor sit amet etc etc etc.",
	"skills":[
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{
			"name":"Nova Southeastern University",
			"city":"Fort Lauderdale, FL",
			"degree": "Masters",
			"majors":["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckered College",
			"city": "Saint Petersburg, FL",
			"degree":"BA",
			"majors":["CS"],
			"dates": 2003,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school":"Udacity",
			"dates": 2014,
			"url": "http:///www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."

		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images":[
				"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr21-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
				"https://lh3.ggpht.com/23-sq0p0GqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr21-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
			]
		}
	]
}



if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}

var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
	// make a course
	console.log("Made a course");
}

var courses = 0; // keeps track of how many courses made
while(cameron.job === "course dev") {
	makeCourse();
	courses = courses + 1;
	if(courses === 10) { // 10 courses maximum
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}





// $("#main").append("Leopold Kwok");

// [string].replace([old], [new])

// var name = "James";

// var email = "cameron@udacity.com";

// var newEmail = email.replace("udacity", "gmail");

// console.log(email);

// console.log(newEmail);

// var awesomeThoughts = "My name is Cameron and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

// $("#main").append(funThoughts);



// var name = "Leopold";

// var role = "Junior Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);

// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);

// $("#header").prepend(formattedName);

// var skills = ["awesomeness", "programming", "teaching", "JS"];

// // $("#main").append(skills);

// // $("#main").append(skills[0]);

// $("#main").append(skills.length);


// // object declaration

// var bio = {
// 	"name" : "Leopold Kwok",
// 	"role" : "Junior Web Developer",
// 	"contacts": {
// 		"mobile": "0778-999-5094",
// 		"email": "leopoldkwok@gmail.com",
// 		"github": "leopoldkwok",
// 		"twitter": "@leopoldkwok",
// 		"location": "London"
// 	},
// 	"welcome message" : "Hello World!",
// 	"skills": [
// 		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
// 	],
// 	"bioPic": "images/fry.jpg"
// };

// // $("#main").append(bio.name);

// // bio.city = "Mountain View";
// // bio.email = "leopold.kwok@gmail.com";

// bio["city"] = "Mountain View";
// bio["email"] = "james.williams@udacity.com";

// $("#main").append(bio.city);

// // Practice with Object Syntax

// // Dot notation

// var work = {};
// work.position = "Course Developer";
// work.employer = "Udacity";
// work.years = 0.3;

// // bracket notation

// var education = {};
// education["name"] = "Nova Southeastern University";
// education["years"] = "2005-2013";
// education["city"] = "Fort Lauderdale, FL, US";



// var education = {
// 	"schools": [
// 		{
// 			"name": "Eckerd College",
// 			"city": "Saint Petersburg, FL, US",
// 			"degree": "BA",
// 			"major": ["CompSci", "French"]
// 		},
// 		{
// 			"name": "Nova Southeastern University",
// 			"city": "Fort Lauderdale, FL, US",
// 			"degree": "Masters",
// 			"major": ["CompSci"]
// 		}
// 	]
// }

// $("#main").append(work["position"]);
// $("#main").append(education.name);


// var education = {
// 	"schools": [
// 		{
// 			"name": "Nova Southeastern University",
// 			"location": "Fort Lauderdale, FL",
// 			"degree":"Masters",
// 			"majors":["CS"],
// 			"dates": 2013,
// 			"url": "http://example.com"
// 		},
// 		{
// 			"name":"Eckerd College",
// 			"location": "Saint Petersburg, FL",
// 			"degree": "BA",
// 			"majors":["CS"],
// 			"dates": 2003,
// 			"url":"http://example.com"
// 		}
// 	]
// ,
// 	"onlineCourses": [
// 		{
// 			"title":"Javascript Syntax",
// 			"school":"Udacity",
// 			"dates": 2014,
// 			"url": "http://www.udacity.com/course/ud804"
// 		}
// 	]
// }