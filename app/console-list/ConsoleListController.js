(function () {
    'use strict';

    window.agApp.controller('ConsoleListController', Controller);
    
    
    function Controller(ConsoleListService) {
        var vm = this;
        vm.test = "this is a test";
        vm.consoles = [];
        
        Activate();
        
        function Activate() {
            vm.consoles = ConsoleListService.GetConsoles();
        }
    }


})();