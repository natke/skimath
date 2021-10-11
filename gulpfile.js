var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('dist'))
  });
  

function defaultTask(cb) {
  // place code for your default task here
  cb();
}


exports.default = defaultTask