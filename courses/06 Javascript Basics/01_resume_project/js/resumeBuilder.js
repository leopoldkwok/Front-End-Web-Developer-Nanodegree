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

function displayWork() {
	for (job in work.jobs) {
		// create  new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employee and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

var displayProjects = function() {
	// code goes here

}

// encapsulate - holding the display function inside the projects object

projects.display = function() {
	// display code goes here
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// you want to see a map? here's a map
$("#mapDiv").append(googleMap);

// return statements

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) { // passes in the work object above
  var locationArray = []; // initialise a new array

  for (job in work_obj.jobs) { //iterates over every job
    var newLocation = work_obj.jobs[job].location; //we want the location
    locationArray.push(newLocation);
  }

  return locationArray;

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// -------------------------------------------------------------------------------------------------------------------------------

// Internalize Names

function inName(name) {
	name = name.trim().split(" "); // trim removes white space front and bacl of the string
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " +  name[1];
};

$('#main').append(internationalizeButton);

// -------------------------------------------------------------------------------------------------------------------------------





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