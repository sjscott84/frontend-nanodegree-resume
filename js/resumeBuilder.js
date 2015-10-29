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
	//"display":function
}

var education={
	"schools":[
		{
			"name":"University of Canterbury",
			"location":"Christchurch, NZ",
			"degree":"Bachelor of Arts",
			"majors":"Art History",
			"dates":"integer (graduation date)"
			//"url":"string" 
		}
	],
	"onlineCourse":[
		{
			"title":"Title",
			"school":"School"
			//"date":integer (date finished)
			//"url":string
		},
		{
			"title":"Title",
			"school":"School"
			//"date":integer (date finished)
			//"url":string
		}
	]
	//display:function
}

var work={
	"jobs":[
		{
			"employer":"TransGrid",
			"title":"Project Services Officer",
			"location":"Sydney, Australia",
			//"dates"://string (works with a hyphen between them),
			"description":"Blah, blah, blah"
		},
		{
			"employer":"Giraffe Learning Cente",
			"title":"Office Manager",
			"location":"Sydney, Australia",
			//"dates"://string (works with a hyphen between them),
			"description":"Blah, blah, blah"
		},
		{
			"employer":"Banque AIG",
			"title":"Administrative Assistant",
			"location":"London, England",
			//"dates"://string (works with a hyphen between them),
			"description":"Blah, blah, blah"
		}
	]
}

var projects={
	"projects":[
		{
			"title":"Project 1",
			"dates":"string (works with a hyphen between them)",
			"description":"Blah blah"
			//"images"://array with string urls
		},
		{
			"title":"Project 2",
			"dates":"string (works with a hyphen between them)",
			"description":"Blah blah"
			//"images"://array with string urls
		}
	]
	//display:function
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
};

bio.display();















