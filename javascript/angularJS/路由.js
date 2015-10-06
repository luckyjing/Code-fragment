//路由事件，用$rootScope监听这些事件
run(['$rootScope','$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
     
  });
}]);