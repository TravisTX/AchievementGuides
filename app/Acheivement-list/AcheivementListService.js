(function () {
    window.agApp.service('AcheivementListService', Service);

    function Service() {
        var service = {
            GetAcheivement: GetAcheivement
        };
        return service;

        function GetAcheivement(gameKey) {
            return [
                {
                    key: 'borderlands2',
                    displayName: 'blahblah'
                }
        ]
        }
    }
})();