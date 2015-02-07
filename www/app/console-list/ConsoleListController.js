(function () {
    'use strict';

    window.agApp.controller('ConsoleListController', Controller);
    
    
    function Controller(ConsoleListService) {
        var vm = this;
        vm.consoles = [];
        
        Activate();
        
        function Activate() {
            vm.consoles = ConsoleListService.GetConsoles();
        }
    }


})();