appStore.controller('loginController', ['$scope', '$rootScope', '$location', '$timeout', 'dataService', function($scope, $rootScope, $location, $timeout, dataService) {

    $scope.warningFlag = false;
    $scope.users = dataService.usersList();

    $scope.login = function(user) {

        if (user) {
            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i].username == user.username && $scope.users[i].password == user.password) {
                    $rootScope.isSignedIn = true;
                    $location.path('/productlist');
                    break;

                } else {
                    if (i == $scope.users.length - 1) {
                        $scope.errorMsg = 'Please Enter Valid User Name & Password';
                        $scope.warningFlag = true;
                        $scope.user.username = "";
                        $scope.user.password = "";
                        clearFlag();
                    }
                }
            }
        } else {
            $scope.errorMsg = 'Please enter User Name & Password';
            $scope.warningFlag = true;
            clearFlag();
        }
    }

    clearFlag = function() {
        $timeout(function() {
            $scope.warningFlag = false;
        }, 3000);
    }

}]);
