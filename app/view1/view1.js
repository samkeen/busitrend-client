'use strict';

angular.module('busitrendClient.view1', ['ngRoute','ui.grid'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', '$http',
    function ($scope, $http) {
      $scope.listings = [];
      $http.get('http://localhost:3000/api/business_lics?limit=10')
        .success(function (data) {
          $scope.listings = data;
        })
        .error(function (data, status, headers, config) {
          $scope.listings = [data]
        });
      $scope.title = "foom";
    }]);