/**
 * Created by Affan_2 on 18/05/2017.
 */
 angular.module('sands')
    .controller('details', ['$scope', 'User', function($scope, User) {
        $scope.data = User.RetriveDetails()
        console.log($scope.data);
    }]);


angular.module('sands')
    .directive('sAnds', [
        function($scope) {
          var linker = function(scope, element) {
            } //end of linker
            return {
              templateUrl: 'js/controllers/detail.html',
              restrict: 'ECMA',
              replace: true,
              link: linker,
              scope: true
            }
        }
  ]);
