var checkingAccountApp = angular.module('checkingAccountApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    
    $http.get('/controllers/checkingaccounts')
        .success(function (data) {
        $scope.checkingAccountList = data;
        console.log(data);
    })
        .error(function (data) {
        console.log('Error: ' + data);
    });
    
    $scope.createCheckingAccount = function () {
        $http.post('/controllers/checkingaccounts', $scope.formData)
            .success(function (data) {
            $scope.formData = {};
            $scope.checkingAccountList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };
    
    $scope.deleteCheckingAccount = function (id) {
        $http.delete('/controllers/checkingaccounts/' + id)
            .success(function (data) {
            $scope.checkingAccountList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };

}