//使用和命名方式
bumpy-roads & bumpyRoads
//指令自身作用域里面的属性值
scope:{
	someProperty:'@'//设置为@是一个绑定策略，告诉AngularJS将DOM中some-property属性的值复制给新作用域对象中的someProperty属性
	someProperty:'@someAttr'//显式绑定
}
//ng-href
当使用当前作用域中的属性动态创建URL时，应该用ng-href代替href
//ng-switch
<input type="text" ng-model="person.name" id=""/>//模型值
<div ng-switch on="person.name">//switch作用区域
    <p ng-switch-default>胜者是：</p>//默认值
    <p ng-switch-when="123">{{person.name}}</p>//当when满足时输出
</div>
//ng-if与ng-show和ng-hide的区别是它是真正的生成或移除节点
//ng-bind
//ng-cloak
