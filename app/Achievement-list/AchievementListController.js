(function () {
    'use strict';

    window.agApp.controller('AchievementListController', Controller);


    function Controller(AchievementListService, $stateParams) {
        var vm = this;
        vm.gameKey = $stateParams.gameKey;
        vm.achievements = [];

        Activate();

        function Activate() {
            vm.achievements = AchievementListService.GetAchievements(vm.gameKey);
        }
    }


})();