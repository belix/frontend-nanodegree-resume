var bio = {
	"name" : "Felix Belau",
	"role" : "Mobile Software Engineer",
	"contacts" : {
		"mobile" : "015234586645",
		"email" : "felix.belau@me.com",
		"github" : "belix",
		"skype" : "king.belau", 
		"location" : "Munich, Germany"
	},
	"welcomeMessage" : "creating beautiful mobile applications is my passion!",
	"skills" : ["Swift", "Objective-C", "Java"],
	"bioPicture" : "http://functionalaesthetics.eu/wp-content/uploads/2015/07/nbelau-300x300.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "Carl-Orff-Gymnasium",
			"location" : "Unterschleißheim, Germany",
			"degree" : "A-Level",
			"majors" : "Physics, Sports",
			"dates" : "1999-2008",
			"url" : ""
		},
		{
			"name" : "Technische Universität München",
			"location" : "Garching Forschungszentrum, Germany",
			"degree" : "Bachelor of Science",
			"majors" : "Physics",
			"dates" : "2009-2011",
			"url" : ""
		},
		{
			"name" : "Technische Universität München",
			"location" : "Garching Forschungszentrum, Germany",
			"degree" : "Bachelor of Science",
			"majors" : "Computer Science",
			"dates" : "2011-2014"
		},
		{
			"name" : "Technische Universität München",
			"location" : "Garching Forschungszentrum, Germany",
			"degree" : "Master of Science",
			"majors" : "Computer Science",
			"dates" : "2014-2016"
		}						
	]
}

var projects = {
	"project" : [{
		"title" : "Fit Fuze iOS Application (iPhone & Apple Watch)",
		"dates" : "2015", 
		"description" : "Powerful fitness assistant with free Apple Watch support. Period. Leave your pen, papers and training diary in the locker room - FIT Fuze has everything you need. With no need in internet connection.",
		"images" : ["images/fitfuze@2x.png"]
	},
	{
		"title" : "Quizzly iOS Application (iPad)",
		"dates" : "2015", 
		"description" : "Ever thought about creating a special quiz with personalized questions to send it as a present to your friends and family? Looking for a unique present for your beloved ones? Then you gonna love Quizzly – being able to create funny quizzes with your own questions, pictures, personal notes and presents. Give special quizzes to special people for christmas, anniversaries or just to bring back old, funny and unforgettable memories. Quizzly as a present is personal, unique and perfect as a small gift which will bring a smile in your friends’ faces.",
		"images" : ["images/quizzly@2x.jpeg"]
	}]
};


var work = {
	"jobs" : [
		{
			"title" : "Working Student",
			"employer" : "MTU Aero Engines",
			"dates" : "2010-2011",
			"description" : "I created really awesome software",
			"location" : "Munich, Germany"
		},
		{
			"title" : "iOS Developer",
			"employer" : "HeKu IT",
			"dates" : "2011-2015",
			"description" : "I created really awesome ios Applications, like ReadingTrainer, Maxdome App and so on",
			"location" : "Garching, Germany"		
		}	
	]
								
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPicture);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(formattedSkills);
	};

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts.skype);
	//$("#topContacts").append(formattedMobile,formattedEmail,formattedSkype,formattedLocation);
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype, formattedLocation);
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function(){
	for (jobIndex in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var job = work.jobs[jobIndex];
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedDate = HTMLworkDates.replace("%data%", job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		var formattedWorkContent = formattedEmployer + formattedJobTitle + formattedDate + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedWorkContent);
	}
}

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

bio.display()
work.display();
education.display()
projects.display()

$("#mapDiv").append(googleMap);



