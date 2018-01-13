/**
 * @description 文件之间的关联
 */
import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']))