(function () {
    'use strict';

    window.agApp.service('ConsoleListService', Service);

    function Service() {
        var service = {
            GetConsoles: GetConsoles
        };
        
        return service;
        
        function GetConsoles() {
            return [
                {key: 'xbox-one', displayName: 'Xbox One'},
                {key: 'xbox-360', displayName: 'Xbox 360'},
                {key: 'ps3', displayName: 'Playstation 3'},
                {key: 'ps4', displayName: 'Playstation 4'},
                {key: 'steam', displayName: 'Steam'}
            ]
        }
    }

})();