// 类，实例
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
// }
// let p = new Person('杨盼');
// alert(p.getName());





// 继承
// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         alert(`${this.name} eat something`);
//     }
//     speak() {
//         alert(`My name is ${this.name}, age ${this.age}`);
//     }
// }
// class Student extends People {
//     constructor(name, age, number) {
//         super(name, age);
//         this.number = number;
//     }
//     study() {
//         alert(`${this.name} study`);
//     }
// }
// let xiaoming = new Student('xiaoming', 10, 'A1');







// 封装
// class People {
//     name
//     age
//     protected weight // 受保护的属性，只有自己或者子类可以访问
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.weight = 120;
//     }
//     eat() {
//         alert(`${this.name} eat something`);
//     }
//     speak() {
//         alert(`My name is ${this.name}, age ${this.age}`);
//     }
// }
// class Student extends People {
//     number
//     private girlfriend
//     constructor(name, age, number) {
//         super(name, age);
//         this.number = number;
//         this.girlfriend = 'xiaoli';
//     }
//     study() {
//         alert(`${this.name} study`);
//     }
//     getWeight() {
//         alert(`weight ${this.weight}`);
//     }
// }
// let xiaoming = new Student('xiaoming', 10, 'A1');
// xiaoming.getWeight();
// alert(xiaoming.girlfriend);
// alert(xiaoming.weight);






// 多态
// class People {
//     constructor(name){
//         this.name = name;
//     }
//     saySomething(){
//     }
// }
// class A extends People {
//     constructor(name){
//         super(name);
//     }
//     saySomething(){
//         alert('I am A')
//     }
// }
// class B extends People {
//     constructor(name){
//         super(name);
//     }
//     saySomething(){
//         alert('I am B')
//     }
// }
// let a = new A('a');
// a.saySomething();
// let b = new B('b');
// b.saySomething();





// 应用举例
// class jQuery {
//     constructor(seletor) {
//         let slice = Array.prototype.slice;
//         let dom = slice.call(document.querySelectorAll(seletor));
//         let len = dom ? dom.length : 0;
//         for(let i = 0; i < len; i++) {
//             this[i] = dom[i];
//         }
//         this.length = len;
//         this.seletor = seletor || '';
//     }
//     append(node) {
//         // ...
//     }
//     addClass(name) {
//         // ...
//     }
//     html(data) {
//         // ...
//     }
// }
// window.$ = function(seletor){
//     return new jQuery(seletor);
// }
// var $p = $('p');
// console.log($p);





// UML类图关系
// class People {
//     constructor(name, house){
//         this.name = name;
//         this.house = house;
//     }
//     saySomething(){
//     }
// }
// class House {
//     constructor(city){
//         this.city = city;
//     }
//     showCity(){
//         alert(`house in ${this.city}`);
//     }
// }
// class A extends People {
//     constructor(name, house){
//         super(name, house);
//     }
//     saySomething(){
//         alert('I am A')
//     }
// }
// class B extends People {
//     constructor(name, house){
//         super(name, house);
//     }
//     saySomething(){
//         alert('I am B')
//     }
// }

// let aHouse = new House('beijing');
// let a = new A('a', aHouse);
// a.saySomething();
// let b = new B('b');
// b.saySomething();







//用promise演示设计原则 SO
// function loadImg(src){
//     let promise = new Promise(function(resolve,reject){
//         let img = document.createElement('img');
//         img.onload = function(){
//             resolve(img);
//         };
//         img.onerror = function(){
//             reject('图片加载失败');
//         }
//         img.src = src;
//     });
//     return promise;
// }
// let src = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1686976875,929281309&fm=173&app=25&f=JPEG?w=218&h=146&s=2F3672855E72109C0BA111820300E090'
// let result = loadImg(src);
// result.then(function(img){
//     //part1
//     alert(`width: ${img.width}`);
//     return img;  
// }).then(function(img){
//     //part2
//     alert(`height: ${img.height}`);
// }).catch(function(ex){
//     alert(ex);
// });









// 面试题1
// 打车时，可以打快车或者专车。任何车都有车牌号和名称
// 不同的车价格不同，快车每公里1元，专车每公里2元
// 行程开始时，显示车辆信息
// 行程结束时，显示打车金额（假定行程就5公里）
// class Car {
//     constructor(number, name) {
//         this.number = number;
//         this.name = name;
//     }
// }
// // 快车
// class Kuaiche extends Car {
//     constructor(number, name) {
//         super(number, name);
//         this.price = 3;
//     }
// }
// // 专车
// class Zhuanche extends Car {
//     constructor(number, name) {
//         super(number, name);
//         this.price = 2;
//     }
// }
// // 行程
// class Trip{
//     constructor(car){
//         this.car = car;
//     }
//     start() {
//         console.log(`开始行程，名称：${this.car.name}，车牌号：${this.car.number}`);
//     }
//     end() {
//         console.log(`行程结束，金额：${this.car.price * 5}`);
//     }
// }
// // 测试
// let car = new Kuaiche(100,'桑塔纳');
// let trip = new Trip(car);
// trip.start();
// trip.end();









// 面试题2
// 某停车场，分3层，每层100车位
// 每个车位都能监控到车辆的驶入和离开
// 车辆进入前，显示每层的空余车位数量
// 车辆进入时，摄像头可以识别车牌号和时间
// 车辆出来时，出口显示器显示车牌号和停车时长

// // 车辆
// class Car {
//     constructor(num) {
//         this.num = num;
//     }
// }
// // 摄像头
// class Camera {
//     shot(car) {
//         return {
//             num: car.num,
//             inTime: Date.now()
//         }
//     }
// }
// // 出口显示屏
// class Screen {
//     show(car, inTime) {
//         console.log('车牌号', car.num);
//         console.log('停车时间', Date.now() - inTime);
//     }
// }
// // 停车场
// class Park {
//     constructor(floors) {
//         this.floors = floors || [];
//         this.camera = new Camera();
//         this.screen = new Screen();
//         this.carList = {} // 存储摄像头拍摄返回的车辆信息
//     }
//     in(car) {
//         // 通过摄像头获取信息
//         const info = this.camera.shot(car);
//         // 停到某个停车位
//         const i = parseInt(Math.random() * 100 % 100);
//         const place = this.floors[0].places[i];
//         place.in();
//         info.place = place;
//         // 记录信息
//         this.carList[car.num] = info;
//     }
//     out(car) {
//         // 获取信息
//         const info = this.carList[car.num];
//         // 将停车位清空
//         const place = info.place;
//         place.out();
//         // 显示时间
//         this.screen.show(car, info.inTime);
//         // 清空记录
//         delete this.carList[car.num];
//     }
//     emtpyNum() {
//         return this.floors.map(item => {
//             return `${item.index} 层还有 ${item.emptyPlaceNum()} 个空闲车位`
//         }).join('\n');
//     }
// }
// // 层
// class Floor {
//     constructor(index, places) {
//         this.index = index;
//         this.places = places || [];
//     }
//     emptyPlaceNum() {
//         let num = 0;
//         this.places.forEach(item => {
//             if(item.empty) {
//                 num = num + 1;
//             }
//         });
//         return num;
//     }
// }
// // 车位
// class Place {
//     constructor() {
//         this.empty = true;
//     } 
//     in() {
//         this.empty = false;
//     }
//     out() {
//         this.empty = true;
//     }
// }
// // 测试
// // 初始化停车场
// const floors = [];
// for (let i = 0; i < 3; i++){
//     const places = [];
//     for (let j = 0; j < 100; j++) {
//         places[j] = new Place();
//     }
//     floors[i] = new Floor(i + 1, places);
// }
// const park = new Park(floors);

// // 初始化车辆
// const car1 = new Car(100);
// const car2 = new Car(200); 
// const car3 = new Car(300); 

// console.log('第一辆车进入');
// console.log(park.emtpyNum());
// park.in(car1);

// console.log('第二辆车进入');
// console.log(park.emtpyNum());
// park.in(car2);

// console.log('第一辆车离开');
// park.out(car1);

// console.log('第二辆车离开');
// park.out(car2);

// console.log('第三辆车进入');
// console.log(park.emtpyNum());
// park.in(car3);

// console.log('第三辆车离开');
// park.out(car3);







// 工厂模式
// class Product {
//     constructor(name){
//         this.name = name;
//     }
//     init() {
//         alert('init');
//         console.log(this.name);
//     }
//     fun1() {
//         alert('fun1');
//     }
//     fun2() {
//         alert('fun2');
//     }
// }
// class Creator { // 工厂
//     create(name) {
//         return new Product(name);
//     }
// }
// //测试
// let creator = new Creator();
// let p = creator.create('p1');
// p.init();
// p.fun1();



// 单例模式
// 测试：注意这里只能使用静态函数 getInstance，不能new SingleObject()！！！
// class SingleObject {
//     login(){
//         console.log('login...') 
//     }
// }
// SingleObject.getInstance = (function(){
//     let instance;
//     return function(){
//         if(!instance){
//             instance = new SingleObject();
//         }
//         return instance;
//     }
// })();
// let obj1 = SingleObject.getInstance();
// obj1.login();
// let obj2 = SingleObject.getInstance();
// obj2.login();
// console.log('obj1 === obj2',obj1 === obj2);// 两者必须完全相等

// console.log('------------');
// let obj3 = new SingleObject(); // 无法完全控制使用者去使用
// obj3.login();
// console.log('obj1 === obj3',obj1 === obj3);





// 单例模式登录框逻辑
// class LoginForm {
//     constructor(){
//         this.state = 'hide';
//     }
//     show(){
//         if(this.state === 'show') {
//             alert('已经显示');
//             return
//         }
//         this.state = 'show';
//         console.log('登陆框显示成功');
//     }
//     hide() {
//         if(this.state === 'hide') {
//             alert('已经隐藏');
//             return;
//         }
//         this.state = 'hide';
//         console.log('登陆框隐藏成功');
//     }
// }
// LoginForm.getInstance = (function(){
//     let instance;
//     return function(){
//         if(!instance) {
//             instance = new LoginForm();
//         }
//         return instance;
//     }
// })();
// //测试
// let login1 = LoginForm.getInstance();
// login1.show();

// let login2 = LoginForm.getInstance();
// login2.hide();
// console.log('login1===login2', login1===login2);






//适配器模式
// class Adaptee {
//     specificRequest() {
//         return '德国标准插头';
//     }
// }
// class Target {
//     constructor() {
//         this.adaptee = new Adaptee();
//     }
//     request() {
//         let info = this.adaptee.specificRequest();
//         return `${info} - 转换器 - 中国标准插头 `
//     }
// }
// // 测试
// let target = new Target();
// let res = target.request();
// console.log(res);





// 装饰器模式
// class Circle {
//     draw() {
//         console.log('画一个圆形');
//     }
// }
// class Decorator {
//     constructor(circle) {
//         this.circle = circle;
//     }
//     draw() {
//         this.circle.draw();
//         this.setRedBorder(circle);
//     }
//     setRedBorder(circle) {
//         console.log('设置红色边框');
//     }
// }
// // 测试
// let circle = new Circle();
// circle.draw();
// console.log('----分割线---');
// let dec = new Decorator(circle);
// dec.draw();




// 装饰器模式es7语法
// @testDec
// class Demo {
// }
// function testDec(target) { // 装饰Demo，把Demo类作为参数（target）传进去
//     target.isDec = true;
// }
// alert(Demo.isDec);




// 装饰器模式es7语法
// function testDec(isDec) {
//     return function (target) {
//         target.isDec = isDec; 
//     }
// }
// @testDec(false)
// class Demo {
// }
// alert(Demo.isDec);



// 装饰类 - mixin示例
// function mixins(...list) {
//     return function(target) {
//         Object.assign(target.prototype, ...list)
//     }
// }
// const Foo = {
//     foo(){
//         alert('foo')
//     }
// }
// @mixins(Foo)
// class MyClass{
// };
// let obj = new MyClass();
// obj.foo; // 'foo'



// 装饰方法 - 例1
// function readonly(target, name, descriptor) {
//     // descriptor 属性描述对象（Object.defineProperty 中会用到）原来的值如下
//     // {
//     //     value: specifiedFunction,
//     //     enumerabel: false,
//     //     consfigurable: true,
//     //     writable: true
//     // }
//     descriptor.writable = false;
//     return descriptor;
// }
// class Person {
//     constructor(){
//         this.first = 'A';
//         this.last = 'B';
//     }
//     // 装饰方法
//     @readonly 
//     name() {
//         return `${this.first} ${this.last}`
//     }
// }
// var p = new Person();
// console.log(p.name());
// p.name = function(){} // 这里会报错，因为name是只读属




// 装饰方法 - 例2
// function log(target, name, descriptor){
//     var oldValue = descriptor.value; // descriptor.value指add函数
//     descriptor.value = function(){
//         console.log(`Calling ${name} with`, arguments);
//         return oldValue.apply(this, arguments)
//     }
//     return descriptor;
// }
// class Math {
//     @log
//     add(a, b) {
//         return a + b;
//     }
// }
// const math = new Math();
// const result = math.add(2, 4); // 执行add时，会自动打印日志，因为有@log装饰器
// console.log('result', result);




// core-decorators  1
// import {readonly} from 'core-decorators';
// class Person {
//     @readonly
//     name() {
//         return 'zhang san';
//     }
// }
// let p = new Person();
// console.log(p.name());
// // p.name = function (){};


// core-decorators  2
// import {deprecate} from 'core-decorators';
// class Person {
//     @deprecate('即将废用', {url:'www.baidu.com'})
//     name(){
//         return 'zhang san';
//     }
// }
// let p = new Person();
// p.name();





// 代理模式
// class ReadImg {
//     constructor(fileName) {
//         this.fileName = fileName;
//         this.loadFromDisk();// 初始化即从硬盘中加载。模拟

//     }
//     display(){
//         console.log('dispaly...',this.fileName);
//     }
//     loadFromDisk(){
//         console.log('loading...',this.fileName);
//     }
// }
// class ProxyImg{
//     constructor(fileName){
//         this.realImg = new ReadImg(fileName);
//     }
//     display(){
//         this.realImg.display();
//     }
// }
// //测试
// let proxyImg = new ProxyImg('1.png');
// proxyImg.display();




// 代理模式，明星经济人
// let star = {
//     name:'张xx',
//     age:25,
//     phone:'star:13900000000'
// }
// let agent = new Proxy(star,{
//     get: function(target, key){
//         if(key === 'phone'){
//             //返回经济人自己的手机号
//             return 'agent:18600000000';
//         }
//         if(key === 'price'){
//             // 明星不报价，经纪人报价
//             return 120000;
//         }
//         return target[key];
//     },
//     set: function(target, key, val){
//         if(key === 'customPrice'){
//             if(val < 100000){
//                 // 最低10w
//                 throw new Error('价格太低');
//             } else {
//                 target[key] = val;
//                 return true;
//             }
//         }
//     }
// });
// // 测试
// console.log(agent.name);
// console.log(agent.age);
// console.log(agent.phone);
// console.log(agent.price);
// agent.customPrice = 9000;
// console.log('agent.customPrice',agent.customPrice);




// 观察者模式
// 主题。保存状态，状态变化之后触发所有的观察者对象
// class Subject {
//     constructor(){
//         this.state = 0;
//         this.observers = [];
//     }
//     getState() {
//         return this.state;
//     }
//     setState(state) {
//         this.state = state;
//         this.notifyAllObservers();
//     }
//     notifyAllObservers() {
//         this.observers.forEach(onserver => {
//             onserver.update();
//         });
//     }
//     attach(observer) {
//         this.observers.push(observer);
//     }
// }
// // 观察者
// class Observer {
//     constructor(name,subject){
//         this.name = name;
//         this.subject = subject;
//         this.subject.attach(this);
//     }
//     update(){
//         console.log(`${this.name} update, state: ${this.subject.getState()}`)
//     }
// }
// //测试
// let s = new Subject();
// let o1 = new Observer('o1', s);
// let o2 = new Observer('o2', s);
// let o3 = new Observer('o3', s);
// s.setState(1);
// s.setState(2);
// s.setState(3);





// 迭代器模式
// 能兼容es6中所有的有序集合的数据结构
// class Iterator{
//     constructor(container){
//         this.list = container.list;
//         this.index = 0;
//     }
//     next(){
//         if(this.hasNext()){
//             return this.list[this.index++];
//         }
//         return null
//     }
//     hasNext(){
//         if(this.index >= this.list.length){
//            return false; 
//         }
//         return true;
//     }
// }
// class Container{
//     constructor(list){
//         this.list = list;
//     }
//     // 生成遍历器
//     getIterator(){
//         return new Iterator(this);
//     }
// }
// // 测试
// var arr = ['a','b','c','d','e','f','g'];
// let container = new Container(arr);
// let iterator = container.getIterator(); // 生成一个遍历器
// while(iterator.hasNext()){
//     console.log(iterator.next());
// }





// 迭代器模式
// `Symbol.iterator`并不是人人都知道
// 也不是每个人都需要封装一个each方法
// 因此有了`for...of`语法
// for...of 是遍历迭代器的，必须具备`Symbol.iterator`属性
// function each(data){
//     let iterator = data[Symbol.iterator]();
//     let item = {done:false};
//     while(!item.done){
//        item = iterator.next();
//        if(!item.done) {
//            console.log(item.value);
//        }
//     }
// }
// // function each(data){
// //     // 带有遍历器特性的对象 - data[Symbol.iterator]有值
// //     for(let item of data){
// //         console.log(item);
// //     }
// // }

// //测试
// let arr = [1,2,3,4];
// let nodeList = document.getElementsByTagName('p');
// let m = new Map();
// m.set('a',100);
// m.set('b',200);
// each(arr);
// each(nodeList);
// each(m);





// 状态模式
// 交通信号灯不同颜色的变化
// 状态
// class State{
//     constructor(color) {
//         this.color = color;
//     }
//     handle(context){
//         console.log(`turn to ${this.color} light`);
//         // 设置状态
//         context.seState(this);
//     }
// }
// // 主体
// class Context{
//     constructor() {
//         this.state = null;
//     }
//     // 获取状态
//     getState() {
//         return this.state;
//     }
//     seState(state) {
//         this.state = state;
//     }
// }

// // 测试
// let context = new Context();

// let green = new State('green');
// let yellow = new State('yellow');
// let red = new State('red');

// // 绿灯亮了
// green.handle(context);
// console.log(context.getState());// 打印状态

// // 黄灯亮了
// yellow.handle(context);
// console.log(context.getState());// 打印状态

// // 红灯亮了
// red.handle(context);
// console.log(context.getState());// 打印状态




// 原型模式
// let prototype = {
//     getName:function(){
//         return this.first + '' +this.last
//     },
//     say:function(){
//         alert('hello')
//     }
// }
// // 基于原型创建 x
// let x = Object.create(prototype);
// x.first = 'A';
// x.last = 'B';
// alert(x.getName());
// x.say();
// // 基于原型创建 y
// let y = Object.create(prototype);
// y.first = 'C';
// y.last = 'D';
// alert(y.getName());
// y.say();




// 策略模式
// 不好例子
// class User {
//     constructor(type){
//         this.type = type;
//     }
//     buy(){
//         if(this.type === 'ordinary'){
//             console.log('普通用户购买')
//         } else if (this.type === 'member') {
//             console.log('会员用户购买')
//         } else if (this.type === 'vip') {
//             console.log('vip用户购买')
//         }
//     }
// }

// // 测试
// let u1 = new User('ordinary');
// u1.buy();

// let u2 = new User('member');
// u2.buy();

// let u3 = new User('vip');
// u3.buy();


// 策略模式
// 好例子
// class OrdinaryUser {
//     buy(){
//         console.log('普通用户购买')
//     }
// }
// class MenberUser {
//     buy(){
//         console.log('会员用户购买')
//     }
// }
// class VipUser {
//     buy(){
//         console.log('vip用户购买')
//     }
// }
// //test
// let u1 = new OrdinaryUser();
// u1.buy();

// let u2 = new MenberUser();
// u2.buy();

// let u3 = new VipUser();
// u3.buy();





// 职责链模式
// class Action {
//     constructor(name){
//         this.name = name;
//         this.nextAction = null;
//     }
//     setNextAction(action){
//         this.nextAction = action;
//     }
//     handle(){
//         console.log(`${this.name} 审批`)
//         if(this.nextAction != null) {
//             this.nextAction.handle();
//         }
//     }
// }

// let a1 = new Action('组长');
// let a2 = new Action('经理');
// let a3 = new Action('总监');
// a1.setNextAction(a2);
// a2.setNextAction(a3);
// a1.handle()






// 命令模式
// 接收者
// class Receiver {
//     exec() {
//         console.log('执行')
//     }
// }

// // 命令者
// class Command {
//     constructor(receiver) {
//         this.receiver = receiver;
//     }
//     cmd() {
//         console.log('执行命令')
//         this.receiver.exec();
//     }
// }
// //触发者
// class Invoker {
//     constructor(command){
//         this.command = command;
//     }
//     invoke() {
//         console.log('开始');
//         this.command.cmd();
//     }
// }

// //士兵
// let soldier = new Receiver();
// //小号手
// let trumpeter = new Command(soldier);
// //将军
// let generral = new Invoker(trumpeter);
// generral.invoke();






// 备忘录模式
// 备忘类
// class Memento {
//     constructor(content) {
//         this.content = content;
//     }
//     getContent() {
//         return this.content;
//     }
// }
// // 备忘列表
// class CareTaker {
//     constructor() {
//         this.list = [];
//     }
//     add(memento){
//         this.list.push(memento)
//     }
//     get(index) {
//         return this.list[index];
//     }
// }
// // 编辑器
// class Editor{
//     constructor(){
//         this.content = null;
//     }
//     setContent(content){
//         this.content = content;
//     }
//     getContent(){
//         return this.content;
//     }
//     saveContentToMemento(){
//         return new Memento(this.content);
//     }
//     getContentFromMemento(memento){
//         this.content = memento.getContent()
//     }
// }
// // test
// let editor = new Editor();
// let careTaker = new CareTaker();
// editor.setContent('111')
// editor.setContent('222')
// careTaker.add(editor.saveContentToMemento())// 将当前内容备份
// editor.setContent('333')
// careTaker.add(editor.saveContentToMemento())// 将当前内容备份
// editor.setContent('444')

// console.log(editor.getContent())
// editor.getContentFromMemento(careTaker.get(1))//撤销
// console.log(editor.getContent())
// editor.getContentFromMemento(careTaker.get(0))//撤销
// console.log(editor.getContent())






// 中介者模式
// class A{
//     constructor(){
//         this.number = 0;
//     }
//     setNumber(num, m){
//         this.number = num;
//         if(m) {
//             m.setB()
//         }
//     }
// }

// class B{
//     constructor(){
//         this.number = 0;
//     }
//     setNumber(num, m){
//         this.number = num;
//         if(m){
//             m.setA()
//         }
//     }
// }


// // 中介者
// class Mediator{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     setB(){
//         let number = this.a.number;
//         this.b.setNumber(number * 100);
//     }
//     setA(){
//         let number = this.b.number;
//         this.a.setNumber(number / 100)
//     }
// }

// let a = new A();
// let b = new B();
// let m = new Mediator(a,b);
// a.setNumber(100, m);
// console.log(a.number,b.number);
// b.setNumber(100, m);
// console.log(a.number,b.number);









// 综合实例
import App from '../demo/App'
const entry = new App('app');
entry.init();