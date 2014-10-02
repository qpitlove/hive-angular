'use strict';

/**
 * @ngdoc function
 * @name hiveAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hiveAngularApp
 */
angular.module('hiveAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
