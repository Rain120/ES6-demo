{
  // 基本定义和生成实例
  class Parent{
    constructor(name = 'xiaosan', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }
  }

  let v_parent = new Parent()
  console.log('构造函数和实例', v_parent)
}

{
  class Parent{
    constructor(name = 'xiaosan', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }
  }

  class Child extends Parent {
  }

  let child = new Child()

  console.log('继承', child)
}

{
  // 继承父类构造函数
  class Parent{
    constructor(name = 'xiaosan', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }
  }

  class Child extends Parent {
    constructor(name = 'child', age = '20', gender = 'male') {
      super(name, age, gender)
      this.type = 'child'
    }
  }

  
  let child = new Child()

  console.log('继承传递函数', child)
}

{
  // getter setter
  class Parent{
    constructor(name = 'san', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }

    get longName() {
      return 'xiao' + this.name
    }

    set longName(value) {
      this.name = value
    }
  }

  let parent = new Parent()

  console.log('getter', parent.longName)

  parent.longName = 'si'

  console.log('setter', parent.longName)
}

{
  // 静态方法
  class Parent{
    constructor(name = 'san', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 通过类去调用，而不是类的实例
    static tell() {
      console.log('tell')
    }
  }

  Parent.tell()

}

{
  // 静态属性
  class Parent{
    constructor(name = 'san', age = '2', gender = 'female') {
      this.name = name
      this.age = age
      this.gender = gender
    }
    // 通过类去调用，而不是类的实例
    static tell() {
      console.log('tell')
    }
  }

  Parent.type = 'test'

  console.log('静态属性', Parent.type)

}