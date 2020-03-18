
var app = angular.module('Bargain2App', []);



app.controller('Bargain2Controller', ['$scope', '$http',

    function($scope, $http) {

        $scope.LineActivities = {
            'sponsorId': '',//发起人Id
            'product': '天然绿茶', // 产品
            'originalPrice': 100,//原价
            'presentPrice':100,//现价
            'sabreplayLimit': 10,//限制刀数
        }

        $scope.activityhistory = {
            'TheLineActivities': '',//所属活动线Id
            'Bargain': 10, //砍价金额
            'cutUserId': '',//帮砍用户id
            'TheCurrentPrice': '',//当前价格
        }

        $scope.user = {};

        $http.get('/users/current/login').success(

            function(data, status, headers, config) {
                if (data.flag) {
                    $scope.user = data.data
                    $scope.activityhistory.cutUserId =  $scope.user.id
                    $scope.LineActivities.sponsorId =  $scope.user.id
                    $http.get('/LineActivities?sponsorId=' + $scope.user.id).success(

                        function(data, status, headers, config) {
                            if (data.flag) {
                                $scope.LineActivities = data.data[0]
                            } else {
                                /*      alert(data.message);*/
                            }
                        });
                } else {
                    alert(data.message);
                }
            });



        $http.get('/activityhistory?cutUserId=' + $scope.user.id).success(

            function(data, status, headers, config) {
                if (data.flag) {
                    $scope.ActivityHistory = data.data

                } else {
                    /* alert(data.message);*/
                    $scope.ActivityHistory = null
                }
            });

        $scope.FromTheCut = function (){
            $scope.LineActivities.presentPrice = $scope.LineActivities.presentPrice - 10
            $scope.activityhistory.TheCurrentPrice = $scope.LineActivities.originalPrice

            $http({
                method: 'POST',
                url: '/LineActivities',
                data: $scope.LineActivities
            }).success(function (data, status, headers, config) {

                if (data.flag) {
                    alert('活动线post成功')
                    //获取活动线
                    $http.get('/LineActivities?sponsorId=' + $scope.user.id).success(

                        function(data, status, headers, config) {
                            if (data.flag) {
                                $scope.LineActivities = data.data[0]
                                $scope.activityhistory.TheLineActivities = $scope.LineActivities.id
                                $http({
                                    method: 'POST',
                                    url: '/activityhistory',
                                    data: $scope.activityhistory
                                }).success(function (data, status, headers, config) {

                                    if (data.flag) {
                                        alert('活动历史post成功')
                                        window.location.href = window.location.protocol + '//' + window.location.host + 'href="/w/bargain4friends/"' + $scope.user.id
                                    } else {
                                        alert(data.message)
                                    }
                                });

                            } else {
                                alert(data.message);
                            }
                        });
                    /*  window.location.href = window.location.protocol + '//' + window.location.host + '/wxpay/pay?oid=' + data.data.id*/
                } else {
                    alert(data.message)
                }
            });

        }

    }]);































