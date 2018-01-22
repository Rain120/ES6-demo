// decorator 修饰器是个函数
// 第三方修饰器的JS库：core-decorators
{
    // 修饰器函数,使用范围是函数中使用
    let readonly = function(target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Test {
        @readonly
        // 此处报警告，对修饰器的实验支持是一项将在将来版本中更改的功能。设置 "experimentalDecorators" 选项以删除此警告。
        // "javascript.implicitProjectConfig.experimentalDecorators": true
        time() {
            return '2018-1-21'
        }
    }

    let test = new Test()

    console.log(test.time());
}

{
    let typename = function(target, name, descriptor) {
        target.myname = 'Rainy'
    }

    // 修饰器作为类的静态属性
    @typename
    class Test {

    }
    console.log('类修饰符', Test.myname);
}

{
    let log = (type) => {
        return function(target, name, descriptor) {
            let src_method = descriptor.value
            descriptor.value = (...arg) => {
                src_method.apply(target, arg)
                console.info(`log ${type}`);
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.info('ad show');
        }

        @log('click')
        click() {
            console.info('ad click');
        }
    }

    let ad = new AD()

    ad.show()
    ad.click()
}