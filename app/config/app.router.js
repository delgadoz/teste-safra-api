angular.module("app").config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "public/home/home.template.html",
        })
            .state("details", {
                url: "/details/:characterId",
                templateUrl: "public/character-details-container/characterDetails.html",
                params: {
                    characterId: null,
                },
            });

        $urlRouterProvider.otherwise("/home");
    },
]);