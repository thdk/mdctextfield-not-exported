
// Add dependencies
const gulp = require('gulp');
const rollupstream = require('rollup-stream');
const source = require('vinyl-source-stream');

gulp.task('bundle', function() {
    return rollupstream('rollupstream.config.js')
      .pipe(source("app.js")) // name of the output file
      .pipe(gulp.dest('dist/js')); // location to put the output file

});

gulp.task('default', gulp.series('bundle'));