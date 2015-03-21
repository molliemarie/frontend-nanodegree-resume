// SECTIONS IN ORDER: BIO, EDUCATION, WORK, PROJECTS

// BIO SECTION

var bio = {
	"name": "Mollie Marie Pettit",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+971569853123",
		"email": "mollie.pettit@alumni.stanford.edu",
		"github": "molliemarie",
		"twitter": {},
		"location": "Abu Dhabi, UAE"
	},
	"WelcomeMessage": "A confident, creative, and versatile Technical Specialist with proven analytical expertise and a demonstrative track record delivering operational support and technical solutions in cutting-edge technological academic and commercial environments  ",
	"skills": ["Programming", "CSS", "HTML", "Javascript", "Teaching", "Mathematics"],
	"biopic": "images/me.jpg",
	"places_lived" : ["Morgantown, WV","Minneapolis, MN","Boulder, CO", "Blacksburg, VA", "Alexandria, VA", "Aberdeen, SD", "Cherokee, IA", "Bradenton, FL"]
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile)

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail)

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub)

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation)	

	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPicture);

	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append(formattedMessage);



	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", 
			bio.skills[5]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();

// EDUCATION SECTION

var education = {
	"schools": [
		{
			"school": "Stanford University",
			"location": "Palo Alto, CA",
			"degree": "MS (honors)",
			"dates": "2010-2013",
			"major": ["Geology"], 
			"url": "http://www.stanford.edu/"
		},
		{
			"school": "West Virginia University",
			"location": "Morgantown, WV",
			"degree": "BS (honors)",
			"dates": "2004-2009",
			"major": ["Mathematics & Geology"],
			"url": "http://www.wvu.edu/"
		}
	],
	"onlineCourses": [
		{
			"title":"Javascript Basics",
			"school":"Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"

		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud775"
		}
	]
}

education.display = function() {
	for (schoolInfo in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolInfo].degree);
		var formattedSchoolInformation = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolInformation);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolInfo].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolInfo);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineDates);	

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineURL);	
	}
}
education.display();



// WORK SECTION

var work = {
    "jobs": [
        {
            "employer": "Baker Hughes",
            "location": "Abu Dhabi, UAE",
            "title": "Geoscientist",
            "years": "2014 - Present",
            "description": ["Meticulously recorded & analysed detailed oil & gas data as a Baker Hughes geoscientist in the UAE","Proved versatile across field engineering trials on various geoscience projects; preparing and presenting results","Delivered final product presentations, quality & data reports for various stakeholder & client geoscience projects","Integrated customers requirements to deliver efficient, cost effective & intelligent technical solutions & support","Considered a hands-on technical professional with excellent communication skills; winning a team player award "]
        },
        {
        	"employer": "Stanford University",
            "location": "Stanford, CA, USA",
            "title": "Community Associate Training Coordinator",
            "years": "2013",
            "description": ["Provided direct operational support to staff & students","Prepared, collated and evaluated on-line surveys, event participant logistical information and orientation projects","Introduced new templates and methods for simpler and easier tracking of activity"]
        },
        {
            "employer": "Stanford University",
            "location": "Stanford, CA, USA",
            "title": "Researcher / Teaching Assistant",
            "years": "2010-2013",
            "description": ["Won a reputation as a dynamic teaching assistant for guiding, mentoring & appraising Stanford undergraduates","Gathered user requirements and created an integrated accessible geographic and topographic information system","Collated and analysed intelligence data; performing data modelling utilising ArcGIS and MATLAB software tools","Collaborated & coordinated research activity with government bodies & societies to enable project data collection","Evaluated and analysed data using Excel & created visual presentations using Illustrator, Photoshop & PowerPoint","Assessed and developed spatial statistics & analysis for simulation & modeling of environmental data"]
        },
        {
        	"employer": "American Geosciences Institute",
            "location": "Alexandria, VA, USA",
            "title": "Geoscience and Public Policy Intern",
            "years": "2009",
            "description":["Explained scientific concepts to non-technical personnel in clear/easy to understand terms","Successfully managed AGI website updates; supporting and troubleshooting server and systems technical issues"]
        }
    ]
};

work.display = function(){
	for (var job in work.jobs) {

	    $("#workExperience").append(HTMLworkStart);

	    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    $(".work-entry:last").append(formattedEmployerTitle);

	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
	    $(".work-entry:last").append(formattedDates);


	    // add the descriptions in bulleted form
		for (i in work.jobs[job].description) {
			if (work.jobs[job].description.length>i) {
				$("#workExperience").append(HTMLworkDescriptionStart);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[i]);
				$(".descript:last").append(formattedDescription);
			}			
		}
	}
}
work.display();

// RETURNS PLACE OF WORK INTO CONSOLE

// function locationizer(work_obj) {
// 	var locationArray = [];
// 	for (job in work_obj.jobs) {
// 		var newLocation = work_obj.jobs[job].location;
// 		locationArray.push(newLocation);
// 	}
// 	return locationArray;
// }
// console.log(locationizer(work));

// PROJECTS SECTION

var projects = {
    "projects": [{
        "title": "Mockup to Website",
        "description": "I was provided with a design mockup as a PDF file which I replicated in design using HTML and CSS. I developed a responsive website that displays images, descriptions, and links to each of the portfolio projects that I have completed throughout the course of the Front - End Web Developer Nanodegree.",
   		"dates": 2015,
		"images": {}
    }, {
        "title": "Interactive Resume",
        "description": "I have demonstrated my mastery of Javascript syntax through a series of challenges. Each multipart problem mimicked a real - life challenge that front - end developers face. I wrote clean code and applied my knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges. The end-product is this interactive resume!",
    	"dates":2015,
    	"images": {}
    // }, {
    //     "title": "Classic Arcade Game Clone",
    //     "description": "You will be provided with visual assets and a game loop engine;using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
   	// 	"dates": 2015,
   	// 	"images": {}
    // }, {
    //     "title": "Website Optimization",
    //     "description": "You will optimize a provided website with a number of optimization - and performance - related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
    // 	"dates": 2015,
    // 	"images": {}
    // }, {
    //     "title": "Neighborhood Map Project",
    //     "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.You will then add additional functionality to this application, including: map markers to identify popular locations or places you’ d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations.You will then research and implement third - party APIs that provide additional information about each of these locations(such as StreetView images, Wikipedia articles, Yelp reviews, etc). ",
    //     "dates": 2015,
    //     "images": {}
    // }, {
    //     "title": "Feed Reader Testing",
    //     "description": "In this project, you will be learning about testing with Javascript.Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD.This is when developers write tests first, before they ever start developing their application. Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
   	// 	"dates": 2015,
   	// 	"images": {}
    }]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// INTERNATIONALIZER FUNCTION

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

// $('#main').append(internationalizeButton);

// APPENDS MAP TO RESUME

$("#mapDiv").append(googleMap);


