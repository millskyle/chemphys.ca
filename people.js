var app = angular.module('myApp', ['ngRoute']);


app.filter("inject", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'index.html'
    })
    .when("/member", {
        templateUrl: 'member.html'
    });
    
});

app.controller('myCtrl', function($scope, $location) {

    $scope.application = "<? echo $_GET['a']; ?>";
    $scope.absoluteURL = "http://chemphys.ca/pages/";
    $scope.currentPath = $location.path();


    $scope.data = {
        
        ranks: ["Research Officer", "Postdoctoral Fellow","Graduate Student","Undergraduate Student"],


        people: [
            {
                name: "Isaac Tamblyn",
                photo: "https://chemphys.ca/pages/image/group/itamblyn.jpg",
                email: "isaac.tamblyn@nrc.ca",
                status: "Research Officer",
	        rank: "Research Officer",
                affiliations: ["University of Ontario Institute of Technology", "University of Ottawa"],
                website: "http://clean.energyscience.ca/",
                order: 100,
            },
            {
                name: "Phil Bunker",
                photo: "https://chemphys.ca/pages/people_photos/pbunker_icon.JPG",
                email: "philip.bunker@nrc.ca",
                status: "Emeritus Research Officer",
		rank: "Research Officer",
                website: "https://chemphys.ca/pbunker",
                order: 100,
            },
            {
                name: "Michael Schuurman",
                photo: "https://chemphys.ca/pages/people_photos/schuurman.jpg",
                email: "michael.schuurman@nrc.ca",
                affiliations: ["University of Ottawa"],
                status: "Research Officer",
		rank: "Research Officer",
                website: "",
                order: 100,
            },
            {
                name: "Michael Spanner",
                photo: "https://chemphys.ca/pages/people_photos/michael-spanner-fireplace.jpg",
                email: "michael.spanner@nrc.ca",
                affiliations: ["University of Ottawa"],
                status: "Research Officer",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            {
                name: "Khabat Heshami",
                photo: "https://chemphys.ca/pages/people_photos/KhabatHeshami.png",
                email: "khabat.heshami@nrc.ca",
                status: "Research Assistant",
	    	rank: "Research Officer",
                website: "https://chemphys.ca/kheshami",
                order: 100,
            },
	    {
                name: "Homin Shin",
                photo: "https://chemphys.ca/pages/people_photos/cat18.jpeg",
                email: "homin.shin@nrc.ca",
                status: "Research Officer",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            {
                name: "Dennis Klug",
                photo: "https://chemphys.ca/pages/people_photos/klug.jpg",
                email: "dennis.klug@nrc.ca",
                status: "Research Officer",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            
            {
                name: "Simon Neville",
                photo: "https://chemphys.ca/pages/people_photos/simon.png",
                email: "sneville@gmail.com",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },
            {
                name: "Issaka Seidu",
                photo: "https://chemphys.ca/pages/people_photos/Issaka_Seidu.png.jpeg",
                email: "",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },

            {
                name: "Uladzimir Yahorau",
                photo: "https://chemphys.ca/pages/people_photos/Uladzimit.jpg",
                email: "",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },
            
            {
                name: "Kyle Mills",
                photo: "https://chemphys.ca/pages/image/group/kmills.jpg",
                email: "kyle.mills@uoit.net",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "http://kylemills.net",
                affiliations: ["University of Ontario Institute of Technology"],
                order: 500,
            },
            {
                name: "Kevin Ryczko",
                photo: "https://chemphys.ca/pages/image/group/new_kryczko.png",
                email: "kryczko@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 500,
            },
            {
                name: "Ryan MacDonell",
                photo: "https://chemphys.ca/pages/people_photos/MacDonell.png",
                email: "rmacd054@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 500,
            },
            
            {
                name: "Michael Coates",
                photo: "https://chemphys.ca/pages/people_photos/coates.png",
                email: "mcoat090@uottawa.ca",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 600,
            },
            {
                name: "Esra'a Saleh",
                photo: "https://chemphys.ca/pages/people_photos/esraa.jpg",
                email: "",
                status: "Co-op Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["Carleton University"],
                order: 700,
            },
            {
                name: "Iryna Luchak",
                photo: "https://chemphys.ca/pages/image/group/iluchak.jpg",
                email: "",
		rank: "Undergraduate Student",
                status: "Summer Student, 2017",
                former: true,
                website: "",
                affiliations: ["University of British Columbia"],
                order: 700,
            },
            ],

                
	};
    
});


