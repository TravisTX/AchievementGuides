(function () {
    'use strict';

    window.agApp.controller('AcheivementController', Controller);
    
    
    function Controller(AcheivementService, $stateParams) {
        var vm = this;
        vm.game = $stateParams.AcheivementKey;
        vm.Acheivement=[];
        
        Activate();
        
        function Activate() {
        vm.Acheivement = AcheivementService.GetAcheivementName(vm.AcheivementKey);
        }
    }


})();