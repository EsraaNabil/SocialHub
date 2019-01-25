
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task("sass",function(){
    return gulp.src('src/sass/Base.scss')
   .pipe(sass())
   .pipe(gulp.dest('dist/css'))
    })

gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', ['sass'])
})

gulp.task('default',['sass','watch'])
