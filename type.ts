
interface Bird {
  fly: boolean,
  sing: () => {}
}

interface Dog {
  fly: boolean,
  bark: () => {}
}

function trainAnimal1(animal: Bird | Dog) { // 联合类型
  if (animal.fly) {
    (animal as Bird).sing(); //类型断言 as
  }
  (animal as Dog).bark()
}

function trainAnimal2(animal: Bird | Dog) {
  // in 语法做类型保护
 if ('sing' in animal) {
   animal.sing()
 } else {
    animal.bark()
 }
}

// typeof 做语法保护
function add (first: string | number, second: string | number): string | number {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 用 instanceof 做类型保护
class NumberObj {
  count: number;
}
function addSecond (first: object | NumberObj , second: number | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  };
  return 0;
}