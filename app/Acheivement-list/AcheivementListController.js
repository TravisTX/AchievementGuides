(function () {
    'use strict';

    window.agApp.controller('AcheivementListController', Controller);
    
    
    function Controller(AcheivementListService, $stateParams) {
        var vm = this;
        vm.gameKey = $stateParams.gameKey;
        vm.Acheivement=[];
        
        Activate();
        
        function Activate() {
        vm.Acheivement = AcheivementListService.GetAcheivement(vm.gameKey);
        }
    }


})();