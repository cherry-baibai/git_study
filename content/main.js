
"use strict"
  // let myImage = document.querySelector("img");



  // myImage.onclick = function () {
  //   let mySrc = myImage.getAttribute("src");
  //   if (mySrc === "/Users/minyue/Desktop/ywy大三.jpg") {
  //     myImage.setAttribute("src", "/Users/minyue/Desktop/IMG_6163.JPG");
  //   } else {
  //     myImage.setAttribute("src", "/Users/minyue/Desktop/ywy大三.jpg");
  //   }
  // };


  // let calculator = {

  //   read(a, b) {
  //     this.a = a;
  //     this.b = b;
  //   },
  //   sum() {
  //     return this.a + this.b
  //   },
  //   mul() {
  //     return this.a * this.b
  //   }
  // };

  // calculator.read(1, 2);
  // console.log( calculator.sum() );
  // console.log(calculator.mul());

  //data:2023.9.12
  //part1
  //对象里面可以套函数(在对象中不能不通过函数直接写方法),通过构造函数可以创造对象(也可以再次嵌套方法 this.sayHi = function() )
  //1.通过传统方式{}创建一个对象,2.通过函数创建一个对象,要用new的方式,名字要大写
  // function User(name) {

  //   this.name = name;
  //   this.isAdmin = false;
  //   return {name: this.name}; //如果返回一个空or一个值都不影响最后被创建的对象,只有返回的是一个对象(不完全属性){}的时候,才会改变最后的对象属性

  // }
  // let cherryuser = new User('cherry');
  // console.log(cherryuser.isAdmin);

  //part2
  // let obj = { sex: 'girl' };
  // function A() { return obj };
  // function B() { return obj };
  // console.log(new A() === new B()) ;

  //part3
  // function Calculator() {

  //   this.read = function(a,b) {
  //     this.a = a;
  //     this.b = b;
  //   },

  //   this.sum = function() {
  //     return this.a + this.b;
  //   },

  //   this.mul = function() {
  //     return this.a * this.b
  //   }

  // }
  // let calculator = new Calculator();
  // calculator.read(3,4);

  // console.log( "Sum=" + calculator.sum() );
  // console.log( "Mul=" + calculator.mul() );

  //part4
  // function Accumulator(startingValue) {
  //   this.value = startingValue;
  //   this.read = function (newvalue) {
  //     this.value += newvalue;
  //   }
  // }

  // let accumulator = new Accumulator(1); // 初始值 1

  // accumulator.read(2); // 添加用户输入的 value
  // accumulator.read(3); // 添加用户输入的 value

  // console.log(accumulator.value); // 显示这些值的总和

//   let a = {
//   value: 0,
//   valueOf() {
//     return this.value += 1;
//   }
// };

// console.log(a == 1 && a == 2 && a == 3);

//data:2023.9.12
//part1 原始类型不是对象,它们不能存储额外的数据,创建原始类型的时候,‘对象包装器’自动创建,之后消失


//data：20239.14
//最大数组的算法题目,不是很懂www
//part1
// function getMaxSubSum(arr){
//   let sumPatial = 0;
//   let sumMax = 0;
//   let count = 0;
//   for (let num of arr) {
    
//     sumPatial += num;
//     sumMax = Math.max(sumMax, sumPatial);
//     if (sumPatial < 0) sumPatial = 0;
    
//   }
//   return sumMax;

// }
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

//part2
//slice是取数组的切片,没有对原始数组改变,即创建一个副本(可负);
//而splice是直接删除某一部分, 输出筛除的那一部分, 且对原数组进行改变, 当某参数设置为0时可以插入数据(可负)
//sort根据输入方程进行排序,返回原数组对象
//数组中搜索的方法:indexOf(返回索引), includes(返回true,false,可以识别NaN作为元素)
//查找特定数组中的对象,用find(item,index, array),如果存在则返回item,不存在返回undefined;filter同find不过它是返回所有匹配的;返回的是数组的元素
//map对数组的每个元素都调用函数，并返回一个新的数组,map的返回值是箭头函数后面的取值即结果数组
//reduce(function(accumulator, item, index, array)
// let arr = ["I", "study", "JavaScript", "right", "now"];
// let result = arr.splice(0, 3);
// console.log(result);
// console.log(arr);
//对比如下
// let arr = ["I", "study", "JavaScript", "right", "now"];
// let result = arr.slice(0, 3);
// console.log(result);
// console.log(arr);
//part3
// function camelize(str) {
//   let strsplits = str.split('-');
//   let strsplit = strsplits.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1));
//   let concateNum = strsplit.join('')
//   console.log(concateNum);
//   return concateNum
// }
// camelize("-webkit-transition");
//part4
// function filterRange(arr, a, b) {
//   return arr.filter(item => (item >= a && item < b) );
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);
//part5
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) { arr.splice(i, 1);i-- }
//   }
  
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值
// console.log(arr);

//part6


// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => (b - a)); //只要有数字,问号判断都为true
// console.log(arr); // 8, 5, 2, 1, -10

// function Calculator() {
//   calcutate(str){
//     return
//   }
// }
// let str = '3+4';
// let sum = 0;
// if (str.indexOf('+') + 1) { let arr = str.split('+'); console.log(arr.map((sum, item) => (+Number(item)) ) ) };
// if (str.indexOf('-') + 1) { let arr = str.split('-'); arr.map(index => index - sum); };

//data：2023.9.16
// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//         console.log(this.current);
//         console.log(this.to);
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   console.log('num :>> ', num); // 1, 然后是 2, 3, 4, 5
// }

//data:2023.9.18
//map可以创造键为任意的对象,每次调用都会返回map自身
//由普通对象创建一个map使用内建方法Object.entries();反之从map里创造对象使用Object.fromEntries()
//Array.from()从可迭代或类数组中创建一个新的浅拷贝的数组实例
//weakSet 和weakMap都是key只能为对象,存在的目的:当对象不存在时,这块内存也被清理掉
//对于普通对象:Object.keys()/values()/entries(); 对于map.keys()
//part1
// let map = new Map();
// let john = { name: "John" };
// map.set('1', 'str1');   // 字符串键
//map.set(1, 'num1');     // 数字键
// map.set(true, 'bool1'); // 布尔值键
// map.set(john, 123);
// let mapObj = Object.fromEntries(map);
// console.log(mapObj)

//part2
// function unique(arr) {
//   let set = new Set((arr));
  
//   return set
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// let setvValues = unique(values);
// console.log(Array.from(setvValues));

//part3 
//可以利用set中元素的唯一性or map中元素的集合性
// function aclean(arr) {
//   let arrySort = [];
//   for (let word of arr) {
//     let sort = word.toLowerCase().split('').sort().join('');
//     arrySort.push(sort);
//   }
//   let set = new Set(arrySort);
//   return set;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) );

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// console.log('keys :>> ', keys);

//data:2023.9.19
//把函数的参数包装在外面对象中,通过对象传参

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {
//   let maxSalary = 0;
//   for (let [key, value] of Object.entries(salaries)) {
//     maxSalary = maxSalary > value ? maxSalary : value;
//     // console.log('key :>> ', key);
//     // console.log('value :>> ', value);

//   }
//   console.log(Object.entries(salaries).find(maxSalary));
//   console.log('maxSalary :>> ', maxSalary);
// }

// topSalary(salaries);

//data:2023.9.21
//对于JSON方法,对象间相互引用的时候,使用replacer函数(要编码的属性数组或映射函数)
//spread语法:可以解决参数(比如数组)传入函数时候,把数组转化为参数列表;与rest方法相反

//data:2023.10.5
//函数可以看成‘对象’这个类别,有两个自带属性, .name和.lenghth(函数入参个数),也可以自己给函数加属性(好处:把属性绑定到函数上可以通过外部代码访问)
//若函数是通过函数表达式形式被声明(没有放在主代码里)并且附带名字,为命名函数表达式,名字可以自己内部调用
//对象this
// function byField(fieldName) {
//   return function (a,b) {
//     return a[fieldName] > b[fieldName]? 1 : -1;
//   }
// }

// let users = [{ name: 'john', age: '20' },
// { name: 'pete', age: '18' },
//   { name: 'ann', age: '19' }]

// console.log(users.sort(byField('age')))
// console.log(users[0]['name']) //[]表示取值, .表示属性
// console.log(users[0].name)

//关于使用函数属性来计算计数
// function makeCounter() {
//   function counter() { return counter.count++; };
//   counter.count = 0;
//   counter.set = function (value) { return counter.count = value; };
//   counter.decrease = function () { return counter.count--; };
//   return counter;
// }
//关于使用闭包来计数
// function makeCounter() {
//   let count = 0;
//   function counter() { return count++; };
//   counter.set = function (value) { return count = value; };
//   counter.decrease = function () { return count--; };
//   return counter;
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.decrease());
// console.log(counter.set(10))
// console.log(counter())

// function sum(a) {
//   let total = a;

//   function loopFunc(a) {
//     total = total + a;
//     console.log('-----',total,a)
//     return loopFunc;
//   }

//   loopFunc.toString = function() {
//     console.log('in')
//     return total;
//   }

//   return loopFunc;
// }

// console.log(sum(1)(3)(4))
//普通函数的this在调用的时候有,比如worker.slow这个this指的就是worker
// 我们将对 worker.slow 的结果进行缓存
// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // 可怕的 CPU 过载任务
//     console.log("Called with " + x);
//     console.log(this, 1111);
//     return x * this.someMethod(); // (*)
    
//   }
// };
// // 和之前例子中的代码相同
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     console.log(this, 33) //因为采用了worker.slow(2),所以对象是worker
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     // function sum(a, b) {
//     //   console.log(this, 'sum')
//     //   return a + b;
//     // }
//     // sum(1,3)

//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }

// // console.log( worker.slow(1) ); // 原始方法有效

// worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存,把worker.slow这个属性重写,传参数的时候仅仅是函数了,丢失了上下文
// console.log(worker.slow, 'func') //输出一下被改写后的worker.slow这个方法
// // console.log( worker.slow(2),  ); // 开始传参使用这个方法了,蛤！Error: Cannot read property 'someMethod' of undefined

//data:2023.10.7
//当函数和对象分开写的时候,如果想要使用外部对象作为函数this,可以使用func.call(obj,parameters);bind方法创造一个新函数并绑定this,而call方法立即调用函数并传递this值
//partical是bind的变体,前者只绑定参数,后者绑定this和参数
//理论上可以用装饰的函数替换一个函数or方法,但是当原函数有属性时,装饰后的函数不再提供这些属性
// function sayHi() {
//   console.log(this.name);
// }
// let user = { name: 'john' };
// sayHi.call(user)

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     // 可怕的 CPU 过载任务
//     console.log("Called with " + x);
//     console.log(this, 1111);
//     return x * this.someMethod(); // (*)
    
//   }
// };
// // 和之前例子中的代码相同
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     console.log(this, 33)
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     // function sum(a, b) {
//     //   console.log(this, 'sum')
//     //   return a + b;
//     // }
//     // sum(1,3)

//     let result = func.call(worker,x); // (**)or func.call(this,x)
//     cache.set(x, result);
//     return result;
//   };
// }

// // console.log( worker.slow(1) ); // 原始方法有效

// worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存,把worker.slow这个属性重写,传参数的时候仅仅是函数了,丢失了上下文
// console.log(worker.slow, 'func') //输出一下被改写后的worker.slow这个方法
// console.log( worker.slow(2)); // 开始传参使用这个方法了,蛤！Error: Cannot read property 'someMethod' of undefined

// function work(a, b) {
//   console.log( a + b ); // work 是一个任意的函数或方法
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log('args are : ', args)
//   // console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function spy(func) {

//   function wrapper(a,b) {
//     // using ...args instead of arguments to store "real" array in wrapper.calls
//     wrapper.calls.push(a,b);
//     return func( a,b);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// function delay(f, time) {
//   function wrapper(contest) {
//     setTimeout(() => (f(contest),time)) 
//   }
//   return wrapper;
// }

// function f(x) {
//   console.log(x);
// }

// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // 在 1000ms 后显示 "test"
// f1500("test"); // 在 1500ms 后显示 "test"

// function defer(f, ms) {
//   return function(...args) {

   
//     setTimeout(function() {
//         console.log(this,'inner');
//       return f.apply(null, args);
//     }, ms);
//   };
// }

// function sayHi(who) {
//   console.log('Hello, ' + who);
  
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // 2 秒后显示：Hello, John

//data:2023.10.8
//对对象添加属性的两种方式1.传统的 2.使用Object.defineProperty(obj,'name', {value:'john, enumerable:true, configurable:true'})
//get func(){}; set func (){}以函数的形式写属性
//原型继承,是通过obj._proto_的方式实现的,或者可以直接写在对象里_proto_:obj(对象和对象之间)
//构造函数可以通过new的方式创建一个对象,如果想对其进行原型继承需要func.prototype=obj(对象和构造函数之间)--表示当创建了一个new func时候把它的原型指向obj
//每个函数都有 "prototype" 属性，即使我们没有提供它。默认的 "prototype" 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身。
//for..in..循环会遍历自己以及继承的键(可列举的),但是Object.keys只返回自己的键,若想在循环中排出,用hasOwnProperty

//data:2023.10.9
//字符串,数字和布尔值不是对象,但若访问他们的属性的时候,临时包装器对象将会通过内建的构造器String, Number, Boolean等创建,提供方法后再消失
//prototype是函数对象有的一个属性,它指向一个对象,一个通过该函数构造的实例对象的原型
//实例对象有._proto_属性,该属性指向创造该实例的对象的构造函数的.prototype
//arr.__proto__ === Array.prototype; obj.__proto__ === Object.prototype; func.__proto__ === Function.prototype
//实际更推荐Object.getPrototypeOf() 和 Object.setPrototypeOf() 来操作对象的原型，而非直接访问 __proto__ 属性。
//Object.create可以实现比for..in更强大的对象克隆方式Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
//Object.create(null, {toString:{ value(){return Object.keys(this).join();} }}),其中toString就是属性描述器不能被for.in找到
//类是一种函数,该函数的代码来自constructor代码,剩下的是存储类中的方法,创建一定要用new
//Object.getPrototypeOf(rabbit).sayHi() === rabbit.__proto__.sayHi(),后者被废弃的;
// function f() {
//   console.log("Hello!");
// }
// Function.prototype.defer = function (ms) { setTimeout(this, ms); console.log(this); } //this因为是f调用了它

// f.defer(1000); // 1 秒后显示 "Hello!"

// function f(a, b) {
//   console.log( a + b );
// }

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) { console.log('this is',this); setTimeout(f.apply(this,args),ms)}
// }

// f.defer(1000)(1, 2); // 1 秒后显示 3

// let dictionary = Object.create(null);

// // 你的添加 dictionary.toString 方法的代码
// dictionary.toString = function () { return Object.keys(this).join(); }

// // 添加一些数据
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // 这里 __proto__ 是一个常规的属性键

// // 在循环中只有 apple 和 __proto__
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // 你的 toString 方法在发挥作用
// console.log(dictionary); // "apple,__proto__"

// class User {

//   constructor(name) {
//     // 调用 setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("John");
// user = new User(""); // Name is too short.

//data:2023.9.10
//如果一个对象方法被传递到某处,或者在另一个上下文中被调用,则this将不再是对其对象使用,如setTimeout(button.click, 1000);这时button不再是click对象,其整体只是作为一个方法传参
//解决方式:包装一个函数,or将方法绑定到对象中constructor (apply?call?)
//在普通函数内直接写新的函数的时候它属于局部变量不能被外部调用,但通过this.属性=函数的时候,它可以被新创建的实例调用,但每个实例对象都会复制一遍;可以选择在prototype上写方法
//类相对于对象比较好的就是它的方法放在prototype上,可以直接被外部实例调用
//类继承class Child extends Parents{}; 重写:super.method()来调用父类的一个方法,super()来调用父类的constructor
//类中有两种方法(实例方法放在prototype上)(static类方法通过类名调用,适用于整个类相关的行为和数据的操作和处理,类方法内部无法直接访问实例属性)
//派生类的constructor必须调用super(),否则this不会被定义
//一般在类中定义的如waterAmount = 0(属性);还有constructor方法等,都是可以通过外部的实例来访问的;一般加_的变量视为内部变量,受保护的字段仍然可以被类继承
//私有属性#变量,其只可以在类内部被访问,无法从类的外部访问or继承
//类的继承:1.父亲的属性搬过来,把自己的属性补上去,覆盖掉冲突的 2.子类有什么函数就写什么函数与父亲无关,constructor也是一个函数
//constructor中的this,一直也是指向实例的,但是,父类构造器总是会使用它自己字段的值，而不是被重写的那一个(属性用父类的因为继承类的属性是在constructor的super执行后才生成,生成之前它的属性copy的父亲的);方法的话是一样的
//类在实例化的时候会去找constructor去执行
//派生的 constructor 必须调用 super 才能执行其父类（base）的 constructor，否则 this 指向的那个对象将不会被创建。并且我们会收到一个报错
//类,实例和prototype是三个不是一个东西,类中有static,实例有constructor和属性,prototype里面有方法
//函数不等于调用,如sort里面传入的是一个函数,调用是要加()的
// class Clock{
  
//   constructor(template) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
// }
//   stop(){
//       clearInterval(timer);
//   };
  
//   start(){
//     this.render();
//     timer = setInterval(()=>this.render, 1000);
//   }
// };

//data:2023.9.11
//内建对象在继承的时候不继承静态方法,即类直接没有继承,只有类.prototype直接有继承
//instanceof 用于检查一个对象(实例)会否属于某个特定的class(也考虑了继承的关系);可以用静态方法static [Symbol.hasInstance](obj){if (obj.canEat) return true}
//如果我们想要获取内建对象的类型，并希望把该信息以字符串的形式返回，而不只是检查类型的话，我们可以用 {}.toString.call 替代 instanceof
//mixin是一个包含可被其他类使用而无需继承的方法的类。解决单继承的限制,使用Object.assign
//使用throw来抛出一个问题


// class FormatError{
//   constructor(message) {
//     super(message);

//   }
// }
//data:2023.10.15
//promise让代码停下来，promise的程序会放在微程序中，程序会先执行宏程序
//JS的运行顺序分为两个队列：宏任务+微任务，settimeout代码会放入下一个宏观代码队列，await 或者 .then之后的代码会放在当前宏任务附属的微任务中,执行先宏任务，再附属微任务，再宏任务
//resolve和reject只是改变了promise的状态
/**
 * const a = () => new Promise((resol, reje) => {
  console.log(2)
  setTimeout(() => {
    console.log(3)
    resolve(2000)
  }, 3000)
  console.log(4)
});

const b = async () => {
  console.log(1)
  const result = await a();// 异步 同步化
  console.log(5, result)
}

console.log('start')
b()
console.log('22222')
 */
//看出promise的很重要的一个例子

// let promise = () => new Promise(function (resolve, reject) {
//   console.log('pre')
//   resolve(1);
//   console.log('after');
//   setTimeout(() => console.log(2), 1000);
// });
// console.log(3);
// // promise.then(console.log);
// const a = async () => {
//   await promise().then(console.log);
// }
// console.log(4);
// a()
// console.log(5);

//data:2023.10.16
//对 .then 的调用都会返回了一个新的 promise； 前一个then方法返回的结果会作为参数自动的传递给后一个then方法
//在 Promise对象中throw一个erro和reject（new Error xxx）的效果是一样的，error会被最近的catch捕获，并且变成 rejected promise状态
//promise里面resolve之后状态就结束，.then之后创建一个新的promise对象其中.then里面用return就代表了当前的promoise被resolve掉了；若throw了error就被rejected了
//catch会把promise变成fullfilled；值的话会继承上一个正常resolve掉的值，如果上一个没有resolve或者return的话会undefined
//new Promise((resolve)=>resolve(3)) 与Promise.resolve(3)是等价的

// a = new Promise((resolve, reject) => {
//   resolve("ok");
// })
// b = a.then((result) => {
//   blabla(); // 没有这个函数
// })
// c =  b.catch(console.log); // ReferenceError: blabla is not defined

//data:2023.10.17
//promise的六种静态方法：
//1.Promise.all接受一个可迭代对象（通常是一个数组项为promise的数组,若非则按原样传递结果）等所有的promise resolve之后，返回新的promise；若任意promise呗reject则
//promification 它指将一个接受回调的函数转换为一个返回 promise 的包装函数（调用该函数传参后会返回一个promise对象）。
//async关键字放在函数前面，让其返回一个promise，其他的值被自动包装在一个resolve的promise中
//await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。

// const a = () => new Promise((resolve, reje) => {
//   console.log(2);
  
//   setTimeout(() => {
//     console.log(3)
//     resolve(2000)
//   }, 3000)
//   console.log(4)
// });

// const b = async () => {
//   console.log(1)
//   const result = await a();// 异步 同步化 删去await后顺序会1 2 4 5 2222 3
//   console.log(5)
// }

// console.log('start')
// b()
// console.log('22222')

//data:2023.10.18
//如果 await 接收了一个非 promise 的但是提供了 .then 方法的对象，它就会调用这个 .then 方法，并将内建的函数 resolve 和 reject 作为参数传入（就像它对待一个常规的 Promise executor 时一样）
//如果一个promise正常resolve，await promise返回的就是其结果；但如果promise被reject，它将throw一个error

//leedcode1
// let candidates = [2];
// let target = 1;
// let output = [];
// let final_output = [];
// for(let num of candidates){
//   let muti = num;
//   let muti_times = 0;
//   while (muti < target) { 
//     let reminder = target % muti;
//     let divisor = parseInt(target / muti) ;
//     if (reminder === 0) { for (let i = 0; i < divisor; i++) { output.push(num); } break; }
//     else if (candidates.indexOf(reminder)+1 && reminder!== num ) {
//       for (let i = 0; i < (divisor+muti_times); i++) { output.push(num);}
//       output.push(reminder);
//     }
//     muti = muti * muti;
//     muti_times = muti_times + 1;
   

//     if (reminder === 0) {
//       for (let i = 0; i < (target / num); i++)
//       { output.push(num); }
//       break;
//     }

//   }
//   if(num === target) {output.push(num)}

// }
// console.log(output);

//data:2023.11.03
console.log('hhh node');




