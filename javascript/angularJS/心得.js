//设计良好的应用会将复杂的逻辑放到指令和服务中，通过使用它们，将控制器重构为要给清亮且更易维护的形式
angular.module('myApp',[])
.controller('MyController',function($scope,UserSrv){
	$scope.onLogin = function(user){
		UserSrv.runLogin(user);
	};
});
//使用数组依赖注入，function里面使用的变量必须在前面数组进行声明才可以
.controller('View1Ctrl', ['$scope',function($scope) {
 
}]);
//时钟
$scope.date = {};
var updateTime = function () {
        $scope.date.raw = new Date().toLocaleTimeString();
        $timeout(updateTime,1000);
      };
      updateTime();