(function () {
    'use strict';

    window.agApp.controller('GameListController', Controller);
    
    
    function Controller(GameListService, $stateParams) {
        var vm = this;
        vm.consoleKey = $stateParams.consoleKey;
        vm.Games=[];
        
        Activate();
        
        function Activate() {
        vm.Games = GameListService.GetGames(vm.consoleKey);
        }
    }


})();