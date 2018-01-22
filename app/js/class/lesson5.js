{
  console.log('B',0B111110111); //503
  console.log(0o767); // 503
}

{
  console.log('15',Number.isFinite(15)); //true
  console.log('NaN',Number.isFinite(NaN)); //false
  console.log('1/0',Number.isFinite('true'/0)); // false
  console.log('NaN',Number.isNaN(NaN)); // true
  console.log('0',Number.isNaN(0)); // false

}

{
  console.log('25',Number.isInteger(25)); //true
  console.log('25.0',Number.isInteger(25.0)); // true
  console.log('25.1',Number.isInteger(25.1)); //false
  console.log('25',Number.isInteger('25')); // false
  console.log('25',Number.isInteger(parseInt('25'))); // true
}

{
  console.log(Math.pow(2, 53) - 1,-(Math.pow(2, 53) - 1)); // 2^53 - 1, -2^53 - 1
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER); // 2^53 - 1, -2^53 - 1
  console.log('10',Number.isSafeInteger(10)); // true
  console.log('a',Number.isSafeInteger('a')); //false
}

{
  console.log("trunc " + 4.1,Math.trunc(4.1)); // 4
  console.log("trunc " + 4.9,Math.trunc(4.9)); // 4
  console.log("floor " + 4.1,Math.floor(4.1)); // 4
  console.log("floor " + 4.9,Math.floor(4.9)); // 4
  console.log("ceil " + 4.1,Math.ceil(4.1)); // 5
  console.log("ceil " + 4.9,Math.ceil(4.9)); // 5
  console.log("round " + 4.1,Math.round(4.1)); // 4
  console.log("round " + 4.9,Math.round(4.9)); // 5
}

{
  console.log('-5',Math.sign(-5)); // -1 负数
  console.log('0',Math.sign(0)); // 0 0
  console.log('5',Math.sign(5)); // 1 正数
  console.log('50',Math.sign('50')); // 1 正数 会自动转换成number类型
  console.log('foo',Math.sign('foo')); // NaN
}


{
  // 二次方根
  console.log('4',Math.sqrt(4)); // 2
  console.log('9',Math.sqrt(9)); // 3 
  // 三次方根
  console.log('-1',Math.cbrt(-1)); // -1
  console.log('8',Math.cbrt(8)); // 2 
}
