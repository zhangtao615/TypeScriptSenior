//namespace 命名空间， 类似于模块化开发，减少全局变量 
///<reference path='./Components.ts'/>

namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}

