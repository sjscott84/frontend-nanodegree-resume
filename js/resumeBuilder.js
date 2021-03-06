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
			"school":"Udacity",
			"date":"2015",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title":"JavaScript Road Trip (Parts 1, 2, 3)",
			"school":"Code School",	
			"date":"2015",
			"url":"https://www.codeschool.com/paths/javascript"
		},
		{
			"title":"Javascript Best Practices",
			"school":"Code School",
			"date":"2015",
			"url":"https://www.codeschool.com/paths/javascript"
		},
		{
			"title":"Shaping up with Angular.js",
			"school":"Code School",
			"date":"2015",
			"url":"https://www.codeschool.com/courses/shaping-up-with-angular-js"
		},
		{
			"title":"Blasting off with Bootstrap",
			"school":"Code School",
			"date":"2015",
			"url":"https://www.codeschool.com/courses/blasting-off-with-bootstrap"
		}
	],
	"professionalQualifications":[
		{
			"title":"Certificate IV in Project Management",
			"school":"Kepner Tregoe",
			"date":"2012",
			"url":"https://www.kepner-tregoe.com"
		},
		{
			"title":"Certificate IV in Training and Assessment",
			"school":"plenty training",
			"date":"2012",
			"url":"https://www.plentytraining.edu.au"
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
			"description":"Blah blah",
			"images":["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
		},
		{
			"title":"Project 2",
			"dates":"2009",
			"description":"Blah blah",
			"images":["http://placehold.it/350x150", "http://placehold.it/350x150"]
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

	$("#header").append("<hr />");

	if(bio.skills.length>0){
		$("#header").append(HTMLskillsStart);
			for(var i=0; i<bio.skills.length; i++){
				var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkills);
			}
	};

	var formattedImage=HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedImage);

	var formattedMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

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

			if(projects.projects[project].images.length>0){
				for(var i=0; i<projects.projects[project].images.length; i++){
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
					$(".project-entry:last").append(formattedImages);
				};
			};
	};
};

education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchool = formattedSchool.replace("%url%", education.schools[school].url);
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

	$(".education-entry:last").append(HTMLonlineClasses);

	for(course in education.onlineCourse){

		var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
			formattedCourse = formattedCourse.replace("%url%", education.onlineCourse[course].url);
		var formattedTitle = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
		var formattedOnlineCourse = formattedCourse+formattedTitle;
		$(".education-entry:last").append(formattedOnlineCourse);
	};

	$(".education-entry:last").append(HTMLprofessionalClasses);

	for(professional in education.professionalQualifications){

		var formattedCourse = HTMLonlineTitle.replace("%data%", education.professionalQualifications[professional].title);
			formattedCourse = formattedCourse.replace("%url%", education.professionalQualifications[professional].url);
		var formattedTitle = HTMLonlineSchool.replace("%data%", education.professionalQualifications[professional].school);
		var formattedOnlineCourse = formattedCourse+formattedTitle;
		$(".education-entry:last").append(formattedOnlineCourse);
	};

};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#hook").append(googleMap);

//shrinks fields on window rezise and enables toggle function
var mq = window.matchMedia("(max-width: 750px)");
mq.addEventListener("resize", toggle_visibility);

function toggle_visibility(id) {

	if (mq.matches){
		var e = document.getElementById(id);
			if(e.style.display !== "block"){
				e.style.display = "block";
			}else{
				e.style.display = "none";
			}
		}
}

//TODO Add new photos for this function which changes biopic on mouseover
//$(".biopic").mouseover(function(){
	//$(".biopic").attr("src", "images/fry.jpg");
//});

//$(".biopic").mouseout(function(){
	//$(".biopic").attr("src", "images/Sarah.jpg");
//});
