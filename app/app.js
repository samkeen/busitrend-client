'use strict';

// Declare app level module which depends on views, and components
angular.module('busitrendClient', [
  'ngRoute',
  'busitrendClient.view1',
  'busitrendClient.view2',
  'busitrendClient.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
