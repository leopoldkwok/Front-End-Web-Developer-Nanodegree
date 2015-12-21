// Four JSON objects 1. biographical information 2. work 3. education 4. projects

var bio = {
	"name":"Leopold Kwok",
	"role": "Junior Web Developer",
	"contacts": {
		"mobile": "0778-999-5094",
		"email": "Leopoldkwok@gmail.com",
		"github": "LeopoldKwok",
		"twitter": "@LeopoldKwok",
		"location": "London"
	},
	"welcomeMessage": "I am fascinated by technology that I recentyly pursued a career change from marketing to web development",
	"skills":["Love to Learn", "Good communicator", "Hard Worker", "Enjoy working as a team"],
	"biopic": "images/fry.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location" : "New York",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Florida",
			"dates": "1998 - December 31, 1999",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."

		}
	]
}

var education = {
	"schools": [
		{
			"name":"Nova Southeastern University",
			"location":"Fort Lauderdale, FL",
			"degree": "Masters",
			"majors":["CS"],
			"dates": 2013,
			"url": "http://example.com"
		},
		{
			"name": "Eckered College",
			"location": "Saint Petersburg, FL",
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
			"date": 2014,
			"url": "http:///www.udacity.com/course/ud804"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Quesp taleggio when the cheese comes out every everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
			"images":["images/image1.png"]
		}
	]
}

// Bio Section
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);

	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

	for(var skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};

// Work Section
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

//projects

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

// education section

education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

		for(var course in education.onlineCourses) {

			$("#education").append(HTMLschoolStart);
				var formattedlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

				$(".education-entry:last").append(formattedlineTitle + formattedonlineSchool, formattedonlineDate, formattedUrl);
		}
};

// Internalize Names

function inName(name) {
	name = name.trim().split(" "); // trim removes white space front and back of the string
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

// call the functions

bio.display();
displayWork();
projects.display();
education.display();

$("#mapDiv").append(googleMap); // activates the google map features
$("#main").append(internationalizeButton); // This is placed right at the bottom of the screen