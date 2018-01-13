/**
 * @description 清除任务
 */
import gulp from 'gulp' // gulp构建
import del from 'del'
import args from './util/args' // 命令行参数解析'

gulp.task('clean', () => {
    return del(['server/public', 'server/views'])
})