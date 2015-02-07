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
        $stateProvider
            .state('console-list', {
                url: "/console-list",
                templateUrl: "app/console-list/console-list.html"
            })
            .state('game-list', {
                url: "/game-list/{consoleKey}",
                templateUrl: "app/game-list/game-list.html"
            });
        .state('Acheivement-list', {
                url: "/Acheivement-list/{gameKey}",
                templateUrl: "app/Acheivement-list/Acheivement-list.html"
            });

    }

    function Run() {
        console.log('run');
    }


})();