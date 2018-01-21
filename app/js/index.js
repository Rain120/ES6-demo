import 'babel-polyfill'
import './class/lesson4'
class Test {
    constructor() {
        this.mes = "Hello ES6"
    }
}

let test = new Test()

document.body.innerHTML = test.mes