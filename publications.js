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
        
        colours: ["#6A322F","#525564","#335078","#813D3A","#4A535C","#74828F","#B1534F","#455F84"],

        publications: [
            {
                authors: ["Kyle Mills", "Isaac Tamblyn"],
                title: "Phase space sampling and operator confidence with generative adversarial networks",
                date: "2017-10-01",
                DOI: "",
                arxiv: "1710.08053",
                color: 2,
                abstract: "",
            },
            {
                authors: ["Iryna Luchak","Kyle Mills","Kevin Ryczko","Adam Domurad","Chris Beeler","Isaac Tamblyn"],
                title: "Extensive deep neural networks",
                date: "2017-08-25",
                arxiv: "1708.06686",
                pdf: "",
                color: 3,
                abstract: "",
            },
            {
                authors: ["Kevin Ryczko","Kyle Mills", "Iryna Luchak", "C. Homenick", "Isaac Tamblyn"],
                title: "Convolutional neural networks for atomistic systems",
                date: "2017-07-31",
                arxiv: "1706.09496",
                pdf: "",
                color: 4,
                abstract: "",
            },{
                authors: ["Kyle Mills","Isaac Tamblyn"],
                title: "Deep neural networks for learning operators through observation: the case of the 2d Ising model",
                date: "2018-01-01",
                arxiv: "1706.09779",
                pdf: "",
                color: 5,
                abstract: "",
            },
            {
                authors: ["Kyle Mills", "Michael Spanner", "Isaac Tamblyn"],
                title: "Deep learning and the Schrodinger Equation",
                date: "2017-10-18",
                journal: "Phys. Rev. A 96, 042113",
                DOI: "10.1103/PhysRevA.96.042113",
                arxiv: "1702.01361",
                pdf: "",
                color: 6,
                abstract: "",
            },
            {
                authors: ["Nataliya Portman","Isaac Tamblyn"],
                title: "Sampling algorithms for validation of supervised learning models for Ising-like systems",
                journal: "J. Comp. Phys.",
                date: "2017-06-31",
                arxiv: "1611.05891",
                DOI: "10.1016/j.jcp.2017.06.045",
                pdf: "",
                color: 7,
                abstract: "",
            },
        ]
    
        
        
	};
    
});


