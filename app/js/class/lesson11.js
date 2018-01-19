// Proxy 代理  Reflect  反射Object

{
  let obj = {
    time: '2018-1-19',
    name: 'net',
    _r: 123
  }

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('-19', '-20') 
    },
    // 拦截对象设置属性
    set(target, key, value) {
      if(key === 'name') {
        return target[key] = value
      } else {
        return target[key]
      }
    },
    // 拦截key in object操作
    has(target, key) {
      if(key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if(key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截 Object.keys, Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  }) 

  console.log('ownKeys', Object.keys(monitor))

  console.log('get', monitor.time)

  monitor.time = '2018-1-21'
  monitor.name = 'Rainy'

  console.log('set', monitor.name)
  console.log('set', monitor.time)  

  console.log('has', 'name' in monitor, 'time' in monitor)

  delete monitor.time
  console.log('delete', monitor)

  delete monitor._r
  console.log('delete', monitor)
}

{
  let obj = {
    time: '2018-1-19',
    name: 'net',
    _r: 123
  }

  console.log('Reflect.get ' + Reflect.get(obj, 'time'))

  Reflect.set(obj, 'time', '2018-1-20')

  console.log('Reflect.get ' + Reflect.get(obj, 'time'))
  console.log(obj)

  console.log('Reflect.has name ' + Reflect.has(obj, 'name'))

}

// Proxy 的使用场景
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if(target.hasOwnProperty(key)) {
          let val = this._validator[key]
          if(!!val(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}为${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof vsl === 'string'
    },
    age(val) {
      return typeof val === 'number' && val >= 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      return validator(this, personValidators)
    }
  }

  const person = new Person('Rainy', 20)

  console.info(person)

  person.age = 19
  
  console.info(person)
}