// 属性的装饰器

//function nameDecorator(target: any, key: string): any {
  // 自己创建一个 descrioptor 属性
  // const descrioptor: PropertyDescriptor = {
  //   writable: false
  // }
  // return descrioptor

  //修改的不是实例上的name, 而是原型上的
  //target[key] = 'Jerry'
  //console.log(target, key)
//}
// name 放在实例上
// class Test {
//   @nameDecorator
//   name = 'Tom';
// }

// const test = new Test();
// console.log((test as any).__proto__.name)