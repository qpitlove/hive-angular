'use strict';

/**
 * @ngdoc function
 * @name hiveAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiveAngularApp
 */
angular.module('hiveAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
