import "babel-polyfill"
import { lesson } from "./class/lesson11";
class Test {
    constructor() {
        this.mes = "Hello ES6"
    }
}

let test = new Test()

document.body.innerHTML = test.mes