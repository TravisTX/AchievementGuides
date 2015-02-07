(function () {
    window.agApp.service('GameListService', Service);

    function Service() {
        var service = {
            GetGames: GetGames
        };
        return service;

        function GetGames(consoleKey) {
            return [
                {
                    key: 'borderlands2',
                    displayName: 'Borderlands 2'
                }
        ]
        }
    }
})();