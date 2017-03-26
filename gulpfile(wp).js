// khai bao bien cho cac plugin
// $ npm install [plugin_name] --save-dev (cau len install plugin trong cmd)
var gulp = require('gulp'); // khoi tao gulp
var sass = require('gulp-sass'); // bien dich sass sang css
var runSequence = require('run-sequence'); // 1 cau lenh chay cho nhieu task

// bien dich sass 
gulp.task('sass', function(){
  return gulp.src('app/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('../css'))
});

// Watch Files For Changes
// Gulp watch syntax (auto load page)
// one task 1 (// khi fie html thay doi thi thuc hien task ['task_name'])
gulp.task('watch', ['sass'], function (){
	gulp.watch('app/**/*.scss', ['sass']); 
});