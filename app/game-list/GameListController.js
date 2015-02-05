(function () {
    'use strict';

    window.agApp.controller('GameListController', Controller);
    
    
    function Controller($stateParams) {
        var vm = this;
        vm.consoleKey = $stateParams.consoleKey;
        
        Activate();
        
        function Activate() {
        }
    }


})();