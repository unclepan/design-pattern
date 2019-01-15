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
let star = {
    name:'张xx',
    age:25,
    phone:'star:13900000000'
}
let agent = new Proxy(star,{
    get: function(target, key){
        if(key === 'phone'){
            //返回经济人自己的手机号
            return 'agent:18600000000';
        }
        if(key === 'price'){
            // 明星不报价，经纪人报价
            return 120000;
        }
        return target[key];
    },
    set: function(target, key, val){
        if(key === 'customPrice'){
            if(val < 100000){
                // 最低10w
                throw new Error('价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});
// 测试
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 9000;
console.log('agent.customPrice',agent.customPrice);