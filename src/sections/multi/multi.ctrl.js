myApp.controller('MultiController', ['$scope', '$http', 'myOperations', function ($scope, $http, myOperations) {
    $scope.submit = () => {
        const altura = $scope.altura, anchura = $scope.anchura, filas = [];

        for (i = 0; i < anchura; i++) {
            filas.push([]);
            for (n = 0; n < altura; n++) {
                filas[i].push(myOperations.multi(i + 1, n + 1));
            }
        }

        $scope.rows = filas;
    };

    $scope.clean = () => {
        $scope.rows = null;
    }
}]);