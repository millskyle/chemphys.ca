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
        
        ranks: ["Research Officer", "Research Assistant", "Postdoctoral Fellow","Graduate Student","Undergraduate Student"],


        people: [
            {
                name: "Isaac Tamblyn",
                photo: "https://chemphys.ca/pages/people_photos/cat09.jpeg",
                email: "isaac.tamblyn@nrc.ca",
                status: "Research Officer",
	        rank: "Research Officer",
                affiliations: ["University of Ontario Institute of Technology", "University of Ottawa"],
                website: "http://clean.energyscience.ca/",
                order: 100,
            },
            {
                name: "Phil Bunker",
                photo: "https://chemphys.ca/pages/people_photos/cat17.jpeg",
                email: "philip.bunker@nrc.ca",
                status: "Emeritus Research Officer",
		rank: "Research Officer",
                website: "https://chemphys.ca/pbunker",
                order: 100,
            },
            {
                name: "Michael Schuurman",
                photo: "https://chemphys.ca/pages/people_photos/cat02.jpeg",
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
                photo: "https://chemphys.ca/pages/people_photos/cat04.jpeg",
                email: "khabat.heshami@nrc.ca",
                status: "Research Assistant",
	    	rank: "Research Officer",
                website: "",
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
                photo: "https://chemphys.ca/pages/people_photos/cat05.jpg",
                email: "dennis.klug@nrc.ca",
                status: "Research Officer",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            
            {
                name: "Simon Neville",
                photo: "https://chemphys.ca/pages/people_photos/cat06.jpeg",
                email: "email@email.com",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },
            {
                name: "Issaka Seidu",
                photo: "https://chemphys.ca/pages/people_photos/cat16.jpeg",
                email: "email@email.com",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },

            {
                name: "Uladzimir Yahorau",
                photo: "https://chemphys.ca/pages/people_photos/cat12.jpeg",
                email: "email@email.com",
                status: "Postdoctoral Fellow",
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },
            
            {
                name: "Kyle Mills",
                photo: "https://chemphys.ca/pages/people_photos/cat07.jpeg",
                email: "kyle.mills@uoit.net",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "http://kylemills.net",
                affiliations: ["University of Ontario Institute of Technology"],
                order: 500,
            },
            {
                name: "Kevin Ryczko",
                photo: "https://chemphys.ca/pages/people_photos/cat13.jpeg",
                email: "kryczko@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 500,
            },
            {
                name: "Ryan MacDonell",
                photo: "https://chemphys.ca/pages/people_photos/cat11.jpeg",
                email: "rmacd054@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 500,
            },
            
            {
                name: "Michael Coates",
                photo: "https://chemphys.ca/pages/people_photos/cat08.jpeg",
                email: "",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa"],
                order: 600,
            },
            {
                name: "Esra'a Saleh",
                photo: "https://chemphys.ca/pages/people_photos/cat01.jpeg",
                email: "",
                status: "Co-op Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["Carleton University"],
                order: 700,
            },
            {
                name: "Iryna Luchak",
                photo: "https://chemphys.ca/pages/people_photos/cat14.jpeg",
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


