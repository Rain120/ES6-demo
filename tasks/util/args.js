/**
 * @description 放置常见构建命令脚本，并对命令行参数解析
 */

import yargs from 'yargs'

const argv = yargs

// 执行所有的js
    .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
})

// 观察所有的js
.option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all scripts'
})

// 输出日志
.option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
})

// 强制生成sourcemap
.option('sourcemap', {
    describe: 'force the creation of sourcemap'
})

// 配置端口
.option('port', {
    string: true,
    default: 3000,
    describe: 'server port'
})

.argv