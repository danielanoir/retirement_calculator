var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.result = function() {

    //testing placeholder:
    $scope.savings = 50000;
    $scope.income = 60000;
    $scope.expenses = 24000;
    // $scope.yearsToRetire = 50;

    var assets = [];
    yearlySavings = $scope.income - $scope.expenses;
    yearOne = $scope.savings;
    retirementNeeded = $scope.expenses / 0.04;

    var titleNeedsChanging = true;
    var yearsToRetire = 50;

    assets.push('assets');
    assets.push(yearOne);
      for (var i=1; i < 51; i++) {
        var beforeRetirement = (assets[i] * 1.05) + yearlySavings;
        assetsBeforeRetirement = Math.round(beforeRetirement);
        var afterRetirement = (assets[i] - $scope.expenses) * 1.05;
        assetsAfterRetirement = Math.round(afterRetirement);
        if (assets[i] < retirementNeeded) {
          assets.push(assetsBeforeRetirement);
        } else {
          if (titleNeedsChanging) {
            yearsToRetire = i - 1;
            titleNeedsChanging = false;
          }
          assets.push(assetsAfterRetirement);
        }
      }

        $("#retireResults").html("You can retire in " + yearsToRetire + " years, once you have $" + retirementNeeded.toLocaleString() + ".");


      var chart = c3.generate({
      legend: {
        hide: true
      },
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
