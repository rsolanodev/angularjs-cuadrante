myApp.controller('RestaController', ['$scope', '$http', 'myOperations', function ($scope, $http, myOperations) {
    $scope.submit = () => {
        const altura = $scope.altura + 1, anchura = $scope.anchura + 1, filas = [];

        for (i = 0; i < anchura; i++) {
            filas.push([]);
            for (n = 0; n < altura; n++) {
                filas[i].push(myOperations.resta(i, n));
            }
        }

        $scope.rows = filas;
    };

    $scope.clean = () => {
        $scope.rows = null;
    }
}]);