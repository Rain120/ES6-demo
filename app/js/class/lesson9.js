// Symbol提供一个独一无二的值
{
  // 声明
  let a1 = Symbol();
  let a = a1
  let a2 = Symbol();
  console.log(Object.prototype.toString.call(a))
  console.log(Object.prototype.toString.call(a1))
  console.log(Object.prototype.toString.call(a2))
  console.log(a1 === a);
  console.log(a1 === a2);

  // Symbol.for()判断是否有key值，会先在全局检查key值是否存在，不存在就会生成一个独一无二的值
  let a3 = Symbol.for('a3') 
  let a4 = Symbol.for('a3') 
  console.log(a3 === a4);
}

{
  let a1 = Symbol.for('abc') 
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj', obj);

  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value);
  }
  // 获取Symbol的属性值
  Object.getOwnPropertySymbols(obj).forEach(function (item) {
      console.log(obj[item]);
  })

  Reflect.ownKeys(obj).forEach(function (item) {
      console.log('ownkeys', item, obj[item]);
  })
}
