const userInfo: any = undefined;
// 通过装饰器来进行异常捕获
function catchError (params: string) {
 return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch(e) {
        console.log(`useInfo.${params} 存在问题`)
      }
    }
  }
}


class Test {
  @catchError('name')
  getName () {
    return userInfo.name;
  }
  @catchError('age')
  getAge () {
    return userInfo.age;
  }
}

const test = new Test();
test.getAge();
test.getName();