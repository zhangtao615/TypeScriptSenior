// 方法装饰器

//普通方法，target对应的是类的prototype
//静态方法， target对应的是类的构造函数

// function getNameDecotator(target: any, key: string, descrtiptor: PropertyDescriptor) {
//   // desctiptor可以对方法的desctiptor属性进行编辑
//   descrtiptor.writable = false; //禁止改写原来的方法
// }

// class Test {
//   name: string;
//   constructor (name: string) {
//     this.name = name;
//   }
//   @getNameDecotator
//   getName () {
//     return this.name;
//   }
// }

// const test = new Test('Tom')
