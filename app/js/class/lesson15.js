{
    // GeneratorFunction 基本定义
    // Generator函数返回iterator接口
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'c'
    }

    let g = tell()

    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
}

{
    let obj = {}

    obj[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 3;
    }

    for (let value of obj) {
        console.log('value', value);
    }
}

{
    // 状态基
    let state = function*() {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }

    let status = state()

    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
}

{
    let draw = function(count) {
        // 具体抽奖逻辑
        console.log(`剩余${count}次`);
    }

    let residue = function*(count) {
        while (count > 0) {
            count--
            yield draw(count)
        }
    }

    let start = residue(5)

    let btn = document.createElement('button')
    btn.id = 'start'
    btn.textContent = '抽奖'
    document.body.appendChild(btn)
    document.getElementById('start').addEventListener('click', () => {
        console.log('click');
        start.next()
    }, false)
}

{
    // 服务器的某个状态定期变化，前端实时取得服务器变化的状态
    // websocket 不适合使用
    // 长轮询
    let ajax = function*() {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ code: 0 })
            }, 200);
        })
    }

    let pull = function() {
        let generator = ajax()
        let step = generator.next()
        step.value.then((d) => {
            if (d.code != 0) {
                setTimeout(() => {
                    console.info('wait')
                    pull()
                }, 1000);
            } else {
                console.info(d);
            }
        })
    }

    pull()
}