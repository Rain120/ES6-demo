{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  console.log('fill-7',[1,'a',undefined].fill(7));
<<<<<<< HEAD
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
=======
  console.log('fill,pos',['a','b','c'].fill(7, 1, 2));
>>>>>>> 53386b0a1db0951b24030eba9f69c718c9665493
}

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
<<<<<<< HEAD
=======
  // Chrome 不支持 Edge 支持 需要增加babel-polyfill依赖
>>>>>>> 53386b0a1db0951b24030eba9f69c718c9665493
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
<<<<<<< HEAD
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
=======
  // 0 需要覆盖的其实位置 3 从第3个数起 5 到第5个截止 [3,5）
  console.log([1,2,3,4,5].copyWithin(0,3,5));
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item > 3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item > 3}));
>>>>>>> 53386b0a1db0951b24030eba9f69c718c9665493
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
