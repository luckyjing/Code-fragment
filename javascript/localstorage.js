// Moudle
//由于闭包的存在，声明的变量和方法只在该模式内部可用，但在返回对象上定义的变量和方法，则对外部使用者都是可用的
var storage = (function(){
	var app = {};
	app.set = function(key,value){
		localStorage.setItem(key,value);
	};
	app.get = function(key){
		return localStorage.getItem(key);
	};
	app.unset = function(key){
		localStorage.removeItem(key);
	};
	return app;
})();