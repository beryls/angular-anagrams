'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('anagramCtrl', ['$scope', 'myFunctions', function($scope, myFunctions) {
    $scope.findAnagrams = myFunctions.findAnagrams;
  }])
  .controller('puzzleCtrl', ['$scope', 'myFunctions', function($scope, myFunctions) {
    $scope.findPuzzles = myFunctions.findPuzzles;
  }]);
