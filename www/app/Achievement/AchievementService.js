(function () {
    window.agApp.service('AchievementService', Service);

    function Service() {
        var service = {
            GetAchievement: GetAchievement
        };
        return service;

        function GetAchievement(AchievementKey) {
            return [
                {
                    achievementId: 1,
                    displayName: 'Super Awesome',
                    description: 'here is how to get this achievement...',
                    videoUrl: 'http://youtube.com/fdslakfjkdsal'
                },
                {
                    achievementId: 2,
                    displayName: 'Stone Cold',
                    description: 'here is how to get the stone cold achievement...',
                    videoUrl: 'http://youtube.com/fdslakfjkdsal'
                }
            ]
        }
    }
})();