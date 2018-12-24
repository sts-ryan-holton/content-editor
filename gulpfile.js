const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const notify = require("gulp-notify");
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


// Compile SASS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.sass').pipe(sass()).pipe(autoprefixer({
    browsers: [
      "last 2 versions",
      ">= 0.2%",
      "Chrome >= 55",
      "Firefox >= 55",
      "Edge >= 16",
      "Explorer >= 11",
      "iOS >= 10",
      "Safari >= 10",
      "Android >= 4.4"
	  ],
    cascade: false
  })).pipe(cleanCSS({
    level: {
      1: {
        all: true,
        tidySelectors: true
      }
    }
  })).pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError)).pipe(gulp.dest('docs/css/'))
  .pipe(notify({ message: 'Compiled SASS successfully.' }));
})


// Compile JS
gulp.task('dev-scripts', function() {
  return gulp.src([
    'src/js/lib/content-editor.js',
    'src/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('docs/js/'))
  .pipe(notify({ message: 'Compiled Dev Scripts successfully.' }));
});

// Compile Plugin JS
gulp.task('plugin-js', function() {
  return gulp.src([
    'src/js/lib/content-editor.js'
  ])
  .pipe(concat('content-editor.js'))
  .pipe(gulp.dest('dist/js/'))
  .pipe(notify({ message: 'Compiled Plugin JS successfully.' }));
});


// Minify Plugin JS
gulp.task('plugin-js-minify', function() {
  gulp.src(['src/js/lib/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(notify({ message: 'Bundle JS successfully.' }));
});

// Watcher
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.sass', ['sass', 'lint-css'])
  gulp.watch('src/js/app.js', ['dev-scripts'])
  gulp.watch('src/js/lib/content-editor.js', ['dev-scripts'])
})


// Lint CSS
gulp.task('lint-css', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
  return gulp
    .src([
      'src/sass/**/*.sass'
    ])
    .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
});
