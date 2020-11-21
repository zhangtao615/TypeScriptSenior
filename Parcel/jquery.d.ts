interface JqueryInstance {
  html: (html: string) => {}
}

// 定义全局变量
declare var $ : (params: () => void) => void;

// 定义全局函数
 declare function $(params: () => void): void;

 declare function $(params: string): JqueryInstance;

// 函数重载
//  interface Jquery {
//   (params: () => void): void;
//   (params: string): JqueryInstance;
//  }

//  declare var $: Jquery;

// 对对象以及类进行类型定义 => 命名空间，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}