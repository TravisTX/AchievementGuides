(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider) {
        console.log('config');

        //
        // For any unmatched url, redirect to /console-list
        $urlRouterProvider.otherwise("/console-list");
        //
        // Now set up the states
        $stateProvider.state('console-list', {
            url: "/console-list",
            templateUrl: "app/console-list/console-list.html"
        });

        $stateProvider.state('game-list', {
            url: "/game-list/{consoleKey}",
            templateUrl: "app/game-list/game-list.html"
        });

        $stateProvider.state('Achievement-list', {
            url: "/Achievement-list/{gameKey}",
            templateUrl: "app/Achievement-list/Achievement-list.html"
        });
        
        $stateProvider.state('Achievement', {
            url: "/Achievement/{achievementId}",
            templateUrl: "app/Achievement/Achievement.html"
        });

    }

    function Run() {
        console.log('run');
    }


})();