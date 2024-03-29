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
                status: "",
	        rank: "Research Officer",
                affiliations: ["Adjunct Professor: University of Ontario Institute of Technology", "Adjunct Professor: University of Ottawa"],
                website: "http://clean.energyscience.ca/",
                order: 100,
            },
            {
                name: "Phil Bunker",
                photo: "https://chemphys.ca/pages/people_photos/pbunker_icon.JPG",
                email: "philip.bunker@nrc.ca",
                status: "Emeritus",
		rank: "Research Officer",
                affiliations: ["Guest Scientist at the Fritz Haber Research Institute, Berlin", "Associate Researcher at The New Zealand Institute for Advanced Study"],
                website: "https://chemphys.ca/pbunker",
                order: 100,
            },
            {
                name: "Michael Schuurman",
                photo: "https://chemphys.ca/pages/people_photos/Schuurman02.png",
                email: "michael.schuurman@nrc.ca",
                affiliations: ["Adjunct Professor: University of Ottawa"],
                status: "",
		rank: "Research Officer",
                website: "https://chemphys.ca/michael-schuurman/",
                order: 100,
            },
            {
                name: "Michael Spanner",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4142.jpg",
                email: "michael.spanner@nrc.ca",
                affiliations: ["Adjunct Professor: University of Ottawa"],
                status: "",
	    	rank: "Research Officer",
                website: "https://chemphys.ca/michael-spanner",
                order: 100,
            },
            {
                name: "Khabat Heshami",
                photo: "https://chemphys.ca/pages/people_photos/Khabat01.png",
                email: "khabat.heshami@nrc.ca",
                status: "",
	    	rank: "Research Officer",
                website: "https://chemphys.ca/khabat-heshami",
                order: 100,
            },
	    {
                name: "Homin Shin",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4133.jpg",
                email: "homin.shin@nrc.ca",
                status: "",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            {
                name: "Dennis Klug",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4144.jpg",
                email: "dennis.klug@nrc.ca",
                status: "",
	    	rank: "Research Officer",
                website: "",
                order: 100,
            },
            
            {
                name: "Simon Neville",
                photo: "https://chemphys.ca/pages/people_photos/Simon02.png",
                email: "sneville.sneville@gmail.com",
                status: "",
                affiliations: ["Supervisor: Michael Schuurman"],
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },
            {
                name: "Issaka Seidu",
                photo: "https://chemphys.ca/pages/people_photos/Issaka01.png",
                email: "seiduissaka@gmail.com",
                status: "",
                affiliations: ["Supervisor: Michael Schuurman"],
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
            },

            {
                name: "Shiva Gholami",
                photo: "https://chemphys.ca/pages/image/group/sgholami.jpg",
                email: "",
                status: "",
                affiliations: ["Supervisor: Isaac Tamblyn"],
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
		former:true,
            },
            {
                name: "Uladzimir Yahorau",
                photo: "https://chemphys.ca/pages/people_photos/Vladimir01.png",
                email: "uladzimiryahorau@gmail.com",
                status: "",
                affiliations: ["Supervisor: Isaac Tamblyn"],
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
		former:true
            },
	    {
                name: "Marianna Lytova",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4124.jpg",
                email: "mlytova2@uottawa.ca",
                status: "",
                affiliations: ["Supervisor: Michael Spanner"],
	    	rank: "Postdoctoral Fellow",
                website: "",
                order: 400,
		former:true
            },
            
            {
                name: "Kyle Mills",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4137.jpg",
                email: "kyle.mills@uoit.net",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "http://kylemills.net",
                affiliations: ["Ontario Tech University","Supervisor: Isaac Tamblyn"],
                order: 500,
		former:true
            },
	    {
                name: "Evan Thomas",
                photo: "https://chemphys.ca/pages/people_photos/missing.png",
                email: "",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Isaac Tamblyn"],
                order: 500,
            },
            {
                name: "Kevin Ryczko",
                photo: "https://chemphys.ca/pages/people_photos/Kevin.jpg",
                email: "kryczko@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "http://kryczko.com",
                affiliations: ["University of Ottawa","Supervisor: Isaac Tamblyn"],
                order: 500,
            },
            {
                name: "Ryan MacDonell",
                photo: "https://chemphys.ca/pages/people_photos/Ryan01.png",
                email: "rmacd054@uottawa.ca",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Michael Schuurman"],
                order: 500,
		former:true,
            },
            
            {
                name: "Michael Coates",
                photo: "https://chemphys.ca/pages/people_photos/coates.png",
                email: "mcoat090@uottawa.ca",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Michael Schuurman"],
                order: 600,
		former: true
            },
            {
                name: "Esra'a Saleh",
                photo: "https://chemphys.ca/pages/people_photos/esraa.jpg",
                email: "",
                status: "Co-op Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["Carleton University","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
	    {
                name: "Iryna Luchak",
                photo: "https://chemphys.ca/pages/image/group/iluchak.jpg",
                email: "",
                status: "Summer Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["University of British Columbia","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
            {
                name: "Jacob Taylor",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4130.jpg",
                email: "",
                status: "Co-op Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["University of Waterloo","Supervisor: Khabat Heshami"],
                order: 700,
		former: true
            },
            {
                name: "Elizabeth Selinger",
                photo: "https://chemphys.ca/pages/image/group/eselinger.jpg",
                email: "",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ontario Institute of Technology","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
	    {
                name: "Rory Coles",
                photo: "https://chemphys.ca/wp-content/uploads/2018/06/DSC_4134.jpg",
                email: "",
                status: "Master's Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ontario Institute of Technology","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
	    {
                name: "Chris Beeler",
                photo: "https://chemphys.ca/pages/people_photos/cb.jpg",
                email: "",
                status: "PhD Student",
		rank:"Graduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: false
            },
	    {
                name: "Kateryna Kubrak",
                photo: "https://chemphys.ca/wp-content/uploads/2018/07/T0J01NP53-U8GRPR10Q-2d67a9bf76b6-512.jpeg",
                email: "",
                status: "Mitacs Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["Taras Shevchenko National University of Kyiv","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
	    {
                name: "Kyle Sprague",
                photo: "https://chemphys.ca/wp-content/uploads/2018/07/male.jpg",
                email: "",
                status: "Summer Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
	    {
                name: "Yuwei Zhang",
                photo: "https://chemphys.ca/wp-content/uploads/2018/07/T0J01NP53-U9L0UCRAN-2dabfc9bc87f-512.jpeg",
                email: "",
                status: "Summer Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["Nankai University","Supervisor: Isaac Tamblyn"],
                order: 700,
		former: true
            },
		
            {
                name: "Axiel Yaël Birenbaum",
                photo: "https://chemphys.ca/pages/people_photos/NRCportrait--AYBirenbaum_retouche.jpeg",
                email: "ayael.birenbaum@gmail.com",
                status: "",
                affiliations: ["Supervisor: Isaac Tamblyn"],
	    	rank: "Postdoctoral Fellow",
                website: "https://aybirenbaum.com",
                order: 400,
		former:true
            },
           
	{
                name: "Katherine Herperger",
                photo: "https://chemphys.ca/pages/people_photos/kherp.jpg",
                email: "kherp046@uottawa.ca",
                status: "Co-op Student",
		rank:"Undergraduate Student",
                website: "",
                affiliations: ["University of Ottawa","Supervisor: Michael Schuurman"],
                order: 700,
		former: true
            },
	
		
		
            ],

                
	};
    
});


