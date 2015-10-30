var bio={
	"name":"Sarah Joy Scott",
	"role":"Web Developer",
	"contacts":
		{
			"mobile":"925-913-0791",
			"email":"s.j.scott84@gmail.com",
			"github":"sjscott84",
			"twitter":"N/A",
			"location":"San Francisco, CA"
		},
	"welcomeMessage":"Hi! Welcome to my resume, I hope you enjoy your stay!",
	"skills":["Web Development", "Training and Assessment", "Project Management"],
	"biopic":"images/Sarah.jpg"
}

var education={
	"schools":[
		{
			"name":"University of Canterbury",
			"location":"Christchurch, New Zealand",
			"degree":"Bachelor of Arts",
			"majors":"Art History",
			"dates":"2006",
			"url":"http://www.canterbury.ac.nz/" 
		}
	],
	"onlineCourse":[
		{
			"title":"Front End Web Development Nanodegree",
			"school":"Udacity"
			//"date":integer (date finished)
			//"url":string
		},
		{
			"title":"Blasting off with Bootstrap",
			"school":"Code School"
			//"date":integer (date finished)
			//"url":string
		}
	]
}

var work={
	"jobs":[
		{
			"employer":"TransGrid",
			"title":"Project Services Officer",
			"location":"Sydney, Australia",
			"dates":"2010-2014",
			"description":"Blah, blah, blah"
		},
		{
			"employer":"Giraffe Learning Cente",
			"title":"Office Manager",
			"location":"Sydney, Australia",
			"dates":"2009-2010",
			"description":"Blah, blah, blah"
		},
		{
			"employer":"Banque AIG",
			"title":"Administrative Assistant",
			"location":"London, England",
			"dates":"2007-2009",
			"description":"Blah, blah, blah"
		}
	]
}

var projects={
	"projects":[
		{
			"title":"Project 1",
			"dates":"2010",
			"description":"Blah blah"
			//"images"://array with string urls
		},
		{
			"title":"Project 2",
			"dates":"2009",
			"description":"Blah blah"
			//"images"://array with string urls
		}
	]
}

bio.display = function(){

	var formattedName=HTMLheaderName.replace("%data%", bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	

	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedImage=HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedImage);

	var formattedMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);
			for(var i=0; i<bio.skills.length; i++){
			var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
			}
	};

	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedLocation);

};

work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedPosition = formattedEmployer+formattedTitle
		$(".work-entry:last").append(formattedPosition);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

			//if statment to add images needs to go here
	};
};

projects.education = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedCourse = formattedSchool+formattedDegree;
		$(".education-entry:last").append(formattedCourse);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
	};

	$(".education-entry:last").append(HTMLonlineClasses);//why not aligned

	for(course in education.onlineCourse){

		var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
		var formattedTitle = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
		var formattedOnlineCourse = formattedCourse+formattedTitle;
		$(".education-entry:last").append(formattedOnlineCourse);
		//add date and URL
	};

};

bio.display();
work.display();
projects.display();
projects.education();

$("#mapDiv").append(googleMap);












