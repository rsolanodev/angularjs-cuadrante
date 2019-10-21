myApp.controller('DivisionController', ['$scope', '$http', 'myOperations', function ($scope, $http, myOperations) {
    $scope.submit = () => {
        const altura = $scope.altura + 1, anchura = $scope.anchura + 1, filas = [], pfila = [];

        for (i = 2; i <= anchura; i++) {
            pfila.push(i)
        }

        for (i = 0; i < anchura; i++) {
            filas.push([]);
            for (n = 0; n < altura; n++) {
                filas[i].push(myOperations.division(i + 1, n + 1));
            }
        }

        $scope.frow = pfila;
        $scope.rows = filas;
    };

    $scope.clean = () => {
        $scope.frow = null;
        $scope.rows = null;
    }
}]);