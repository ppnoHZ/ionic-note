/**
 * Created by zhoudd on 2015/11/17.
 */
angular.module('starter.controllers', [])
  .controller('RegisterCtrl', function ($scope,$http) {
    $scope.title = '注册';
    $scope.register= function () {
      console.log($scope)
      var data={
        username:$scope.username,
        nickname:$scope.nickname,
        password:$scope.password
      };
      console.log(data)
      $http.post('192.168.3.105:18080/account/signup',data
      ).then(function (result) {
          console.log(result);
        })
    }
  })
