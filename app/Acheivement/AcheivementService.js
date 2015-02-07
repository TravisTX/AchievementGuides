(function () {
    window.agApp.service('AcheivementService', Service);

    function Service() {
        var service = {
            GetAcheivementName: GetAcheivementName
        };
        return service;

        function GetAcheivementName(AcheivementKey) {
            return [
                {
                    key: 'borderlands2',
                    displayName: 'crap'
                }
        ]
        }
    }
})();