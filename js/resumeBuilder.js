// var formattedemployer = HTMLheaderemployer.replace("%data%", "Mollie Marie Pettit");
// $("#header").append(formattedemployer);
//Got the above two lines of code from forum. Not sure if it's in the right place

var skills = ["awesomeness", "programming", "teaching", "CSS"];

var bio = {
	"name": "Mollie Marie Pettit",
	"title": "Geoscientist",
	"biopic": "images/me.jpg",
	"contacts": {
		"mobile": "056-985-3123",
		"email": "mollie.pettit@alumni.stanford.edu",
		"github": "molliemarie",
		"location": "Abu Dhabi, UAE"
	},
	"WelcomeMessage": "Welcome and stuff and stuff and stuff.",
	"skills": skills
};

var education = {
	"schools": [
		{
			"school": "Stanford University",
			"location": "Palo Alto, CA",
			"degree": "Masters",
			"major": ["Geology"]
		},
		{
			"school": "West Virginia University",
			"location": "Morgantown, WV",
			"degree": "BS",
			"major": ["Mathematics", "Geology"]
		}
	],
	"online courses": [
		{
			"class":"Javascript Basics",
			"school":"Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"class": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"

		},
		{
			"class": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud775"
		}
	]
}

var work = {
    "jobs": [
        {
            "employer": "Baker Hughes",
            "location": "Abu Dhabi, UAE",
            "title": "Geoscientist",
            "years": "2014 - Present",
            "description": "bla bla bla"
        },
        {
            "employer": "Stanford University",
            "location": "Palo Alto, CA, USA",
            "title": "Researcher",
            "years": "2010-2013",
            "description": "bla bla bla"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Mockup to Website",
        "description": "You will be provided with a design mockup as a PDF - file and must replicate that design in HTML and CSS.You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front - End Web Developer Nanodegree.",
   		"dates": 2015,
		"images": {}
    }, {
        "title": "Interactive Resume",
        "description": "You'll demonstrate your mastery of the language 's syntax through a series of challenges. Each multipart problem mimics a real - life challenge that front - end developers face.You 'll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",
    	"dates":2015,
    	"images": {}
    }, {
        "title": "Classic Arcade Game Clone",
        "description": "You will be provided with visual assets and a game loop engine;using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
   		"dates": 2015,
   		"images": {}
    }, {
        "title": "Website Optimization",
        "description": "You will optimize a provided website with a number of optimization - and performance - related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
    	"dates": 2015,
    	"images": {}
    }, {
        "title": "Neighborhood Map Project",
        "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit.You will then add additional functionality to this application, including: map markers to identify popular locations or places you’ d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations.You will then research and implement third - party APIs that provide additional information about each of these locations(such as StreetView images, Wikipedia articles, Yelp reviews, etc). ",
        "dates": 2015,
        "images": {}
    }, {
        "title": "Feed Reader Testing",
        "description": "In this project, you will be learning about testing with Javascript.Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD.This is when developers write tests first, before they ever start developing their application. Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!",
   		"dates": 2015,
   		"images": {}
    }]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#name").append(formattedName);

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
}

function displayWork() {
	for (var job in work.jobs) {

	    $("#workExperience").append(HTMLworkStart);

	    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

	    var formattedEmployerTitle = formattedEmployer + formattedTitle;

	    $(".work-entry:last").append(formattedEmployerTitle);

	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
	    $(".work-entry:last").append(formattedDates);

	    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

console.log(locationizer(work));


// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// $("#name").append(formattedName);

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

// $('#main').append(internationalizeButton);

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

$("#mapDiv").append(googleMap);

// $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

