/**
 * @description 处理服务器
 */
import liveserver from 'gulp-live-server' // 启动服务器
import gulp from 'gulp' // gulp构建
import gulpif from 'gulp-if' // gulp语句if判断
import args from './util/args' // 命令行参数解析'

gulp.task('serve', (cb) => {
    // callback == cb
    if (!args.watch) return cb()

    // 配置服务器
    var server = liveserver.new(['--harmony', 'server/bin/www'])

    // 启动
    server.start()

    // 监听server下的js,ejs发生改变时候，浏览器实现热更新
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file) => {
        // 通知服务器
        server.notify.apply(server, [file])
    })

    // 服务器路由发生改变，服务器需要重启
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
        // 服务器重启
        server.start.bind(server)()
    })
})