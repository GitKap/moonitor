'use strict';

/* Controllers */

/*
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});


*/





var moonitorApp = angular.module('moonitorApp', [])
		
		moonitorApp.controller('ajaxController', function($scope, $http, $log)
		{
			$scope.ajaxData={};
			$scope.ajaxData.doClick = function(item, event)
			{
				var responsePromise = $http.get('temp/temp.json')

				//$http({method: 'GET', url: , params: { 'foobar': new Date().getTime() } }).
					
					responsePromise.success(function(data, status, headers, config) 
					{
						$log.debug(data);
						//$scope.ajaxData = data;
						$scope.ajaxData.cpu = data.cpu;
						$scope.ajaxData.total = data.total;
						$scope.ajaxData.idle = data.idle;
					});

					responsePromise.error(function(data, status, headers, config) 
					{
						$log.debug("not good");
					});
			}
		});





/*
	<!-- AJAX -->
	<script>
		angular.module("moonitorApp", [])
			.controller("ajaxController", function($scope, $http)
			{
				$scope.ajaxData ={};
				$scope.ajaxData.doClick = function(item, event)
				{
					var responsePromise = $http.get("cpu-info-general.json");
					
					responsePromise.success(function(data, status, headers, config)
					{
						$scope.ajaxData.cpuModel = data.cpu_model;
						$scope.ajaxData.cpuCores = data.current_frequency;
						$scope.ajaxData.cpuCores = data.number_of_cores;
					});

					responsePromise.error(function(data, status, headers, config)
					{
						alert("AJAX failed!");
					});
				}
			}
			
			)

	</script>
*/
