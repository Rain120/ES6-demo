{
  let list = new Set()
  list.add(5)
  list.add(7)
  console.log(`size ${list.size}`)
}

{
  let arr = [1, 2, 3, 4, 5]
  let list = new Set(arr)
  console.log(`size ${list.size}`)
}

{
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)
  console.log('list', list)

  let arr = [1, 2, 3, 1, 2, 3, 4]
  console.log('arr.length', arr.length)
  let arrSet = new Set(arr)

  console.log('unique', arrSet)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  console.log('has', list.has('has'))
  console.log('delete', list.delete('and'), list)
  list.clear()
  console.log('clear', list)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  for(let key of list.keys()) {
    console.log('keys', key)
  }

  for(let value of list.values()) {
    console.log('value', value)
  }

  for(let [key, value] of list.entries()) {
    console.log('entries', key, value)
  }

  list.forEach(function(item) {console.log(item)})
}

{
  // 与Set的区别是 支持的对象不一样。不能遍历
  // 1.waekset必须是对象
  // 2.weakset的对象都是弱引用，不会检测对象是否被使用过，不会跟垃圾机制挂钩，
  // 对象是地址的引用，不检测使用对象的地址是否被垃圾机制回收
  let weakList = new WeakSet()

  let arg = {}
  // has, delelte
  weakList.add(arg)

  console.log('weakList', weakList)

}

{
  let map = new Map()
  let arr = ['123']

  map.set(arr, '456')
  
  console.log('map', map, map.get(arr))
}

{
  let map = new Map([['a', 123], ['b', 456]])
  
  console.log('map', map)
  console.log('map.size', map.size)
  console.log('map.delete', map.delete('a'), map)
  console.log('map.clear', map.clear(), map)
}

{
  let weakMap = new WeakMap()

  let arg = {}

  weakMap.set(arg, 123)

  console.log('weakMap', weakMap.get(arg))
  console.log('weakMap', weakMap, weakMap.get(arg))
}

{
  // 数据结构横向对比, 增, 删, 查, 改
  let map = new Map()
  let arr = []

  // 增
  map.set('t', 1)
  arr.push({t: 1})
  console.info('map-array', map, arr)

  // 查
  let map_exist = map.has('t')
  let arr_exist = arr.find(item => item.t)
  console.info('map-array-search', map_exist, arr_exist)
  
  // 改
  map.set('t', 2)
  arr.forEach(item => {item.t ? item.t = 2 : ''})
  console.info('map-array-modify', map, arr)

  // 删
  map.delete('t')
  let index = arr.findIndex(item => item.t)
  arr.splice(index, 1)
  console.info('map-array-delete', map, arr)
}

{
  // set 和 array的对比
  let item = { t: 1 }
  let set = new Set()
  let arr = []

  // 增
  set.add(item)
  arr.push({t: 1})
  console.info('set-array', set, arr)

  // 查
  let set_exist = set.has(item)
  let arr_exist = arr.find(item => item.t)
  console.info('set-array-search', set_exist, arr_exist)

  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  arr.forEach(item => item.t ? item.t = 2 : '')
  console.info('set-array-modify', set, arr)

  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = arr.findIndex(item => item.t)
  arr.splice(index, 1)
  console.info('set-array-delete', set, arr)
}
// 优先使用map，set
// 如果对数据要求较高，保证每个数据的唯一性使用set
{
  // set, map, object 对比
  let item = { t: 1 }
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  console.info('map-set-obj', map, set, obj)  

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] = 2
  console.info('map-set-obj-modify', map, set, obj) 

  // 删
  map.delete('t')
  set.delete(item)
  delete obj['t']
  console.info('map-set-obj-delete', map, set, obj)    
}