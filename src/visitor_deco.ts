// 访问器的装饰器
// 和func的类似
// function visitDecotator(target: any, key: string, descrtiptor: PropertyDescriptor) {
//   descrtiptor.writable = false
// }
// class Test {
//   private _name: string;
//   constructor (name: string) {
//     this._name = name
//   }
//   get name () {
//     return this._name;
//   }
//   @visitDecotator
//   set name (name:string) {
//     this._name = name;
//   }
// }

// const test = new Test('Tom');
// test.name = 'Jerry';
// console.log(test.name)