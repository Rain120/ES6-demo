/**
 * @description 处理模板
 */
import gulp from 'gulp' // gulp构建
import gulpif from 'gulp-if' // gulp语句if判断
import livereload from 'gulp-livereload' // gulp热更新
import args from './util/args' // 命令行参数解析

gulp.task('pages', () => {
    return gulp.src('app/**/*.ejs')
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})