// 在类中使用泛型

//基础用法
class DataManager<T> {
  constructor(private data: T[]) {}
  getItem (index: number): T {
    return this.data[index]
  }
}
// const arr = ['1', '2', '3']
// const data = new DataManager<string>(arr)
// data.getItem(0)


// 泛型继承接口
interface Item {
  name: string
}

class DataManager2<T extends Item> {
  constructor(private data: T[]) {}
  getItem (index: number): string {
    return this.data[0].name
  }
}
const arr2 = [
  {name: 'Tom'},
  {name: 'Jerry'}
]

const data2 = new DataManager2(arr2)
data2.getItem(1)

// 约束 T 可接收的类型

class DataManager3<T extends number | string> {}

// 使用泛型作为一个具体的类型注解

function fn<T>(params: T) {
  return params;
}

const func: <T>(params: T) => T = fn;