(function () {
    window.agApp.service('GameListService', Service);

    function Service() {
        var service = {
            GetGames: GetGames
        };
        return service;

        function GetGames(consoleKey) {
            if (consoleKey == "xbox-one") {
                return [
                    {
                        key: 'borderlands2',
                        displayName: 'Borderlands 2'
                    },
                    {
                        key: 'somegame',
                        displayName: 'Some Game'
                    }
                ]
            } else if (consoleKey == "xbox-360") {
                return [
                    {
                        key: 'borderlands-360',
                        displayName: 'Borderlands 360'
                    },
                    {
                        key: 'somegame-360',
                        displayName: 'Some Game 360'
                    },
                ]
            } else {
                return [
                ]
            }
        }
    }
})();