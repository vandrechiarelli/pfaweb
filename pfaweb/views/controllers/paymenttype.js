var paymentTypeApp = angular.module('paymentTypeApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    
    $http.get('/controllers/paymenttypes')
        .success(function (data) {
        $scope.paymentTypeList = data;
        console.log(data);
    })
        .error(function (data) {
        console.log('Error: ' + data);
    });
    
    $scope.createPaymentType = function () {
        $http.post('/controllers/paymenttypes', $scope.formData)
            .success(function (data) {
            $scope.formData = {};
            $scope.paymentTypeList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };
    
    $scope.deletePaymentType = function (id) {
        $http.delete('/controllers/paymenttypes/' + id)
            .success(function (data) {
            $scope.paymentTypeList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };

}