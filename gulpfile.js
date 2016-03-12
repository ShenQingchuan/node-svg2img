var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test/specs.js', {'read': false }).pipe(mocha());
});

gulp.task('default', function() {
    gulp.watch(['index.js', 'test/**'], ['test']);
});