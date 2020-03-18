

var app = angular.module('homeApp', ['ui.bootstrap']);


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


app.controller('homeController', [
	'$scope',
	'$http',

	function($scope, $http) {
		$scope.slides = [];
		$scope.gais = [];
		$scope.jidi = [];
		$scope.joins = [];
		$scope.contacts = [];
		$scope.als = [];
		$scope.myInterval = 2000;//轮播时间间隔, 毫秒
		$scope.plans = [];

		$http.get('/infos?classify=集团首页广告').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.slides = data.data
				} else {
					//alert(data.message);
				}
			});

		$http.get('/infos?classify=集团关于逸丰').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.gais = data.data
				} else {
					//alert(data.message);
				}
			});
		$http.get('/infos?classify=集团员工风采').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.fengcai = data.data
				} else {
					//alert(data.message);
				}
			});

		$http.get('/infos?classify=集团产业基地').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.jidi = data.data
				} else {
					//alert(data.message);
				}
			});
		$http.get('/infos?classify=集团实时监控').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.jiankong = data.data
				} else {
					//alert(data.message);
				}
			});

		$http.get('/infos?classify=集团生产规划').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.plans = data.data
				} else {
					//alert(data.message);
				}
			});


		$http.get('/infos?classify=集团招商加盟').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.joins = data.data
				} else {
					//alert(data.message);
				}
			});

		$http.get('/infos?classify=集团联系我们').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.contacts = data.data
				} else {
					//alert(data.message);
				}
			});

		$http.get('/infos?classify=集团友情链接').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.als = data.data
				} else {
					//alert(data.message);
				}
			});
		$http.get('/infos?classify=集团董事长致辞').success(
			function(data, status, headers, config) {
				if (data.flag) {
					$scope.als2 = data.data
				} else {
					//alert(data.message);
				}
			});
	} ]);



$(function(){

	$.ajax({
		type: "get",
		url: "/infos?classify=集团公司新闻" ,
		dataType: "json",
		success:function(callback){
			console.log(callback);
			var li2 = "";
			for (var i = 0; i< callback['data'].length& i<3 ; i++) {
				li2 +='<a href="/intro2?id='+callback['data'][i].id +'">'
				li2 +='<li>· '+callback['data'][i].name +'</li>'
				li2 +='</a>'
			}
			$(".culture_box_down_ul").html(li2);
		},
	});


	$.ajax({
		type: "get",
		url: "/infos?classify=集团旅游养生" ,
		dataType: "json",
		success:function(callback){
			console.log(callback);
			var li3 = "";
			for (var i = 0; i< callback['data'].length& i<3; i++) {
				li3 +='<a href="/news2?id='+callback['data'][i].id +'">'
				li3 += '<div class="culture_div5">'
				li3 +='	<div class="box">'
				li3 +='<div class="culture_box2_up clear">'
				li3 += ' <img src="/showimg/upload/'+callback['data'][i].images +'" />'
				li3 +='</div>'
				li3 +='<div class="culture_box2_down ">'
				li3 +='<p class="box2_tittle">'+callback['data'][i].name +'</p> '
				li3 +='<p class="retract">'+callback['data'][i].description2 +'</p>'
				li3 += '</div></div></div></a>'

			}
			$(".regimen").html(li3);
		},
	});


});