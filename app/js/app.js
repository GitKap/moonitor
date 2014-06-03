'use strict';

/* App Module */

// var phonecatApp = angular.module('phonecatApp', [
//   'ngRoute',
//   'phonecatAnimations',

//   'phonecatControllers',
//   'phonecatFilters',
//   'phonecatServices'
// ]);
/*
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
*/

var moonitorApp = angular.module('moonitorApp', []);

 moonitorApp.config(['$logProvider',
    function($logProvider) {
      $logProvider.debugEnabled(true);
    }]);

 moonitorApp.config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);