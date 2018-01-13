import gulp from 'gulp' // gulp构建
import gulpif from 'gulp-if' // gulp语句if判断
import concat from 'gulp-concat' // gulp文件拼接
import webpack from 'webpack' // webpack打包
import gulpWebpack from 'webpack-stream' // gulp处理文件流
import named from 'vinyl-named' // 文件重命名做标志
import livereload from 'gulp-livereload' // gulp热更新
import plumber from 'gulp-plumber' // 处理文件信息流
import rename from 'gulp-rename' // 文件重命名
import uglify from 'gulp-uglify' // js压缩
import { log, colors } from 'gulp-util' // 命令行工具日志、色彩输出 
import args from './util/args' // 命令行参数解析

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        // 默认错误处理机制，错误集中处理
        .pipe(plumber({
            errorHandle: function() {}
        }))
        // 重命名
        .pipe(named())
        // webpack对js进行编译，3个参数，(引入模块，null，错误处理)
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, status) => {
            log(`Finished '${colors.cyan('scripts')}'`, status.toString({
                chunks: false
            }))
        })
        // 文件存储路径
        .pipe(gulp.dest('server/public/js'))
        // 重命名以备份文件
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩文件，压缩方式配置
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        // 重新文件存储路径
        .pipe(gulp.dest('server/public/js'))
        // 监听文件是否变化，并热更新
        .pipe(gulpif(args.watch, livereload()))
})