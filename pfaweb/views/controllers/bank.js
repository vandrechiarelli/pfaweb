var bankApp = angular.module('bankApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/controllers/banks')
        .success(function (data) {
        $scope.bankList = data;
        console.log(data);
    })
        .error(function (data) {
        console.log('Error: ' + data);
    });
    
    $scope.createBank = function () {
        $http.post('/controllers/banks', $scope.formData)
            .success(function (data) {
            $scope.formData = {};
            $scope.bankList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };
    
    $scope.deleteBank = function (id) {
        $http.delete('/controllers/banks/' + id)
            .success(function (data) {
            $scope.bankList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };

}