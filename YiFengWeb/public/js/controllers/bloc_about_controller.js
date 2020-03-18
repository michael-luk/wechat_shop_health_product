

var app = angular.module('aboutApp', []);


app.filter('safehtmls', function($sce) {
	return function(htmlString) {
		return $sce.trustAsHtml(htmlString);
	}
});

app.filter('getImageFromSplitStr', function () {
	return function (splitStr, position) {
		return GetListFromStrInSplit(splitStr)[position];
	}
});

app.filter('getImageFromSplitStrtext', function () {
	return function (splitStr1, position1) {
		return GetListFromStrInSplitText(splitStr1)[position1];
	}
});


app.controller('aboutController', [
	'$scope',
	'$http',
	function($scope, $http) {
		$scope.plans = [];
		$http.get('/infos?classify=集团关于逸丰').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.plans = data.data
				} else {
					//alert(data.message);
				}
			});
	} ]);
