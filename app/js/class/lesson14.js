// Iterator 迭代器接口
{
   let arr = ['hello', 'world']

   let map = arr[Symbol.iterator]()

   console.log(map.next())
   console.log(map.next())
   console.log(map.next())
  //  value 值 done 是否最后一个
}

{
  let obj = {
    start: [1, 2, 3],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      console.log('arr', arr)
      let len = arr.length
      return {
        next() {
          if(index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      } 
    }
  }

  for( let key of obj) {
    console.log('key', key)
  }
}

{
  let arr = ['hello', 'world']
  for( let value of arr) {
    console.log('value', value)
  }
}