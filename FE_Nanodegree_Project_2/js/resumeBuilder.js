// Four JSON objects 1. biographical information 2. work 3. education 4. projects

var bio = {
	"name":"Leopold Kwok",
	"role": "Junior Web Developer",
	"contacts": [{
		"mobile":"0778-999-5094",
		"email": "Leopoldkwok@gmail.com",
		"github":"LeopoldKwok",
		"twitter":"@LeopoldKwok",
		"location":"London"
	}],
	"welcomeMessage": "I am fascinated by technology that I recentyly pursued a career change from marketing to web development",
	"skills":["Love to Learn", "Good communicator", "Hard Worker", "Enjoy working as a team"],
	"biopic": "images/fry.jpg"
};

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

// Displaying Bio Information

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	};

};

// if(bio.skills.length > 0) {

// 	$("#header").append(HTMLskillsStart);

// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
// 	$("#skills").append(formattedSkill);

// }


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






// call the functions

displayWork();
bio.display();
