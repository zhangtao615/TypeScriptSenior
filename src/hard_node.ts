// 类的装饰器


//装饰器 -- 对类的修饰器， 本身是一个函数, 通过@来使用
// 当定义类时执行
// function testDecorstor () {
//   return function <T extends new (...args: any[]) => {}> (constructor: T) {
//     return class extends constructor {
//       name = 'Jerry'
//       getName () {
//         return this.name;
//       }
//     }
//   }
// }

// const Test = testDecorstor()(class {
//   name: string;
//   constructor (name: string) {
//     this.name = name;
//   }
// })


// const test = new Test('Tom')

// console.log(test)