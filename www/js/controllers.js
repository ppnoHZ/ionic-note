/**
 * Created by zhoudd on 2015/11/17.
 */
angular.module('starter.controllers', [])
    .controller('RegisterCtrl', function ($scope, $http) {
        $scope.title = '注册';
        $scope.register = function () {
            var data = {
                username: $scope.userInfo.username,
                nickName: $scope.userInfo.username,
                password: $scope.userInfo.username

            };
            //$http.post('http://192.168.3.104:18080/account/signup', data
            //).then(function (result) {
            //        $scope.userInfo.data = result.data;
            //    })



            $http.get('http://192.168.3.104:18080/account/test', data
            ).then(function (result) {
                    //console.log(result)
                    $scope.userInfo.data = result.data;
                })
        }
    })
