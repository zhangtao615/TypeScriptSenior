// 泛型 泛指的类型
function join<T>(first: T, second: T): string {
  return `${first}${second}`
}

join<number>(1, 2); //调用方法时，指定泛型T的类型， 参数必须是同一类型的

function map<T> (params: Array<T>): Array<T> {// T[]
  return params
}
map<string>(['1'])

function multiParams<T, P> (first: T, second: P): string {
  return `${first}${second}` 
}

multiParams<string, number>('123', 123)