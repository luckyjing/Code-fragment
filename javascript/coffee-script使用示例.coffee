# 赋值
number = 42
opposite = true
# 条件
number = -42 if opposite
item=6
$("p").addClass "test" if item == 5
funName = () -> alert "123"
# 数组
list = [1, 2, 3, 4, 5]
# 对象
people =
  name: "sjx"
  age:20
# 存在性，假设
ok=false
alert "我知道了" if ok
# 数组推导
cubes = ( Math.random value for value in list)
define = ->
  console.log "123"
people =
  asd:"asd"
# 三元表达式
obj ={}
obj.height = if obj.height<window.innerHeight then window.innerHeight else obj.height
# 变参
testArgument = (first,second,others...) ->
  gold = first
  silver = second
  rest = others
  console.log "金牌得主是#{gold}"
  console.log "银牌得住是#{silver}"
  console.log "没有得奖的是#{rest}"
  undefined
member = ["p1"
          "p2"
          "p3"
          "p4"]
testArgument member...
# 函数名 = （参数） -> 函数体
change = (sth) ->
  console.log sth
arr = [
  1
  2
  3
  4
  5
]
# 遍历一个数组，对数组里面的每一个值进行处理，用when控制条件
for sth in arr when sth is 4
  change sth
demo2 = name:'sjx',age:'20',location:'xian'
# 根据对象生成一个数组
item = for own key,value of demo2
  key+':'+value
# 遍历对象时，对对象进行处理
for index,value of demo2
  do (index,value)->
    console.log index+':'+value
# 对数组的裁剪
arr1 = [1,2,3,4,5]
arr2 = arr1[0..2]
# 对数组的拼接
arr1[arr1.length..arr1.length+2] =['ceshi'
'ceshi2'
'ceshi3']
console.log arr1
# 在没有显式声明return时，不要太在意return放在那里
testFun1 = ->
  Math.random 1
  console.log "我这里显式声明了return"
  return true;
testFun2 = ->
  Math.random 2
# 存在性问题？  mind? 表示mind存在吗
# demo2存在吗？存在的话就是demo2，否则就是[]
demo3 = demo2 ? []
# instance存在吗？
init() if instance?
# 类
class Animal
  constructor:(@name) -> 'sjx'
  move:(meters) ->
    console.log (@name) + '位移了' + meters + '米\n'
  sayName:->
    console.log '我的名字是'+@name+'\n'
class Pig extends Animal
  move: ->
    console.log '我是猪八戒这个类，我调用了自己重写的move方法\n'
    super 5
littlePig = new Pig '猪八戒'
littlePig.sayName()
littlePig.move()
console.log Animal.prototype.move