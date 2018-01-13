/**
 * @description 处理css
 */
import gulp from 'gulp' // gulp构建
import gulpif from 'gulp-if' // gulp语句if判断
import livereload from 'gulp-livereload' // gulp热更新
import args from './util/args' // 命令行参数解析

gulp.task('css', () => {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
})