(function () {
    'use strict';

    window.agApp.controller('AchievementController', Controller);
    
    
    function Controller(AchievementService, $stateParams) {
        var vm = this;
        vm.achievementId = $stateParams.achievementId;
        vm.Achievement=[];
        
        Activate();
        
        function Activate() {
        vm.Achievement = AchievementService.GetAchievementName(vm.achievementId);
        }
    }


})();