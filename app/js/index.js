import "babel-polyfill"
// import { lesson } from "./class/lesson17"
// import {A, test, Hello} from './class/lesson17'
// import * as lesson from './class/lesson17'
import lesson17 from './class/lesson17'
class Test {
    constructor() {
        this.mes = "Hello ES6"
    }
}

let obj = {
    'a': 1,
    'b': {
        'c': 'js',
        'd': 'es',
        'f': {
            g() {}
        },
        h: []
    }
}

let arr = [1, 2, [3, 4, [5, 6, 7, [8, [9, 10]]]]]

console.log([].concat(arr))
console.log(JSON.parse(JSON.stringify(obj))) // 不能拷贝函数
console.log(lesson17.shallowCopy(arr))
console.log(lesson17.deepCopy(arr))

// let test = new Test()

// console.log(lesson17.A)
// console.log(lesson17.test)
// console.log(lesson17.Hello)

// document.body.innerHTML = test.mes