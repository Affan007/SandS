/**
 * Created by Affan_2 on 18/05/2017.
 */
angular.module('sands')
    .controller('details', ['$scope', 'User', function($scope, User) {
        $scope.data = User.RetriveDetails()
        console.log($scope.data);
    }]);
