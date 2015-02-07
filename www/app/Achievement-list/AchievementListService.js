(function () {
    window.agApp.service('AchievementListService', Service);

    function Service() {
        var service = {
            GetAchievements: GetAchievements
        };
        return service;

        function GetAchievements(gameKey) {
            
            return [
                {
                    achievementId: 1,
                    displayName: 'Super Awesome',
                    description: 'for being super awesome',
                    imageUrl: 'http://www.xboxachievements.com/images/achievements/2058/5-+5lcI=.jpg'
                },
                {
                    achievementId: 2,
                    displayName: 'Stone Cold',
                    description: 'for being cool',
                    imageUrl: 'http://www.xboxachievements.com/images/achievements/2058/5-69xW4=.jpg'
                }
        ]
        }
    }
})();