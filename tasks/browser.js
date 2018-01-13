/**
 * @description 处理浏览器监听相关
 */
import gulp from 'gulp' // gulp构建
import gulpif from 'gulp-if' // gulp语句if判断
import gutil from 'gulp-util' // gulp 函数集合
import args from './util/args' // 命令行参数解析'

gulp.task('browser', (cb) => {
    if (!args.watch) return cb()

    gulp.watch('app/**/*.js', ['scripts'])
    gulp.watch('app/**/*.ejs', ['pages'])
    gulp.watch('app/**/*.css', ['css'])
})