var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.result = function() {

    //testing placeholder:
    $scope.savings = 50000;
    $scope.income = 60000;
    $scope.expenses = 24000;

    var assets = [];
    yearlySavings = $scope.income - $scope.expenses;
    yearOne = ($scope.savings * 1.05) + yearlySavings;
    retirementNeeded = $scope.expenses / 0.04;
    assets.push('assets');
    assets.push(yearOne);
      for (var i=1; i < 50; i++) {
        var beforeRetirement = (assets[i] * 1.05) + yearlySavings;
        assetsBeforeRetirement = Math.round(beforeRetirement);
        var afterRetirement = (assets[i] * 1.05) - $scope.expenses;
        assetsAfterRetirement = Math.round(afterRetirement);
        if (beforeRetirement <= retirementNeeded) {
          assets.push(assetsBeforeRetirement);
        } else {
          assets.push(assetsAfterRetirement);
        }
      }

      var chart = c3.generate({
      data: {
        columns: [
          assets
        ],
        colors: {
          assets: '#00a075',
        },
        types: {
          assets: 'area'
        },
      }
    });
  };

});
