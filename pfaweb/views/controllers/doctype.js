var docTypeApp = angular.module('docTypeApp', []);

function mainController($scope, $http) {
    $scope.formData = {};
    
    $http.get('/controllers/doctypes')
        .success(function (data) {
        $scope.docTypeList = data;
        console.log(data);
    })
        .error(function (data) {
        console.log('Error: ' + data);
    });
    
    $scope.createDocType = function () {
        $http.post('/controllers/doctypes', $scope.formData)
            .success(function (data) {
            $scope.formData = {};
            $scope.docTypeList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };
    
    $scope.deleteDocType = function (id) {
        $http.delete('/controllers/doctypes/' + id)
            .success(function (data) {
            $scope.docTypeList = data;
            console.log(data);
        })
            .error(function (data) {
            console.log('Error: ' + data);
        });
    };

}