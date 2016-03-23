/*jshint strict:false */
/*jshint node:true */

var gulp       = require('gulp'),
  browserSync  = require('browser-sync').create(),
  del          = require('del'),
  filter       = require('gulp-filter'),
  header       = require('gulp-header'),
  cssnano      = require('gulp-cssnano'),
  ngAnnotate   = require('gulp-ng-annotate'),
  autoprefixer = require('gulp-autoprefixer'),
  reload       = browserSync.reload,
  replace      = require('gulp-replace'),
  rev          = require('gulp-rev'),
  runSequence  = require('run-sequence'),
  sass         = require('gulp-ruby-sass'),
  sourcemaps   = require('gulp-sourcemaps'),
  uglify       = require('gulp-uglify'),
  usemin       = require('gulp-usemin'),
  sassdoc      = require('sassdoc');

var today = new Date();
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * Built ' + today + ' ',
  ' */',
  ''
].join('\n');

// clean dist folder
gulp.task('clean:dist', function(cb) {
  return del(['./build', './dist'], cb);
});



gulp.task('sass', function() {
  return sass('./app/assets/sass/**/*', { sourcemap: true })
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    // For inline sourcemaps
    .pipe(sourcemaps.write())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.stream());
});




gulp.task('sass-dist', function() {
  var cssfilter = filter('design_system.css', {restore:true});

  return sass('./app/assets/sass/**/*', { sourcemap: false, style: 'condensed' })
    .on('error', sass.logError)

    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(cssfilter)
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(gulp.dest('./dist/css')

   );

});


//usemin
gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [
        cssnano,
        rev
      ],
      vendorjs: [
        uglify({mangle: true}),
        rev
      ],
      appjs: [
        replace('debug: true', 'debug: false'),
        ngAnnotate({remove: true, add: true, single_quotes: true}),
        uglify({mangle: true}),
        rev
      ]
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('fontrelease', function() {
  gulp.src([
      'build/assets/fonts/**/*'
    ])
    .pipe(gulp.dest('./dist/fonts'));
});

//copy modules
gulp.task('copy:modules', [], function() {
  gulp.src([
      './app/modules/**/i18n/*',
      './app/modules/**/templates/**',
      './app/modules/**/assets/images/**/*.*'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy core templates views
gulp.task('copy:core-templates', [], function() {
  gulp.src([
      './app/core/templates/*'
    ])
    .pipe(gulp.dest('./build/core/templates'));
});

//copy modules data json
gulp.task('copy:json-data', [], function() {
  gulp.src([
      './app/modules/**/services/**/*.json'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy core data json
gulp.task('copy:json-core-data', [], function() {
  gulp.src([
      './app/core/data/**/*.json'
    ])
    .pipe(gulp.dest('./build/core/data/'));
});


//copy angular-i18n files from bower_components to module folder
gulp.task('copy:angular-i18n', [], function() {
  gulp.src([
      './app/bower_components/angular-i18n/angular-locale_en-us.js',
      './app/bower_components/angular-i18n/angular-locale_es-us.js',
      './app/bower_components/angular-i18n/angular-locale_fr-fr.js',
      './app/bower_components/angular-i18n/angular-locale_ja-jp.js',
      './app/bower_components/angular-i18n/angular-locale_pt-br.js'
    ])
    .pipe(gulp.dest('./app/modules/i18n/angular-i18n'));
});


//copy localization json
gulp.task('copy:json-i18n-data', [], function() {
  gulp.src([
      './app/modules/**/i18n/**/*.js'
    ])
    .pipe(gulp.dest('./build/modules'));
});

//copy fonts
gulp.task('copy:fonts', [], function() {
  gulp.src([
      './app/assets/fonts/*',
      './app/bower_components/bootstrap/dist/fonts/*'
    ])
    .pipe(gulp.dest('./build/assets/fonts'))
    .pipe(gulp.dest('./dist/fonts'));

});

//copy images
gulp.task('copy:images', [], function() {
  gulp.src([
      './app/assets/images/**/*'
    ])
    .pipe(gulp.dest('./build/assets/images'));
});

//copy core/config
gulp.task('copy:core-config', [], function() {
  gulp.src([
      './app/core/config/*'
    ])
    .pipe(gulp.dest('build/core/config'));
});

gulp.task('clean', function(cb) {
  del(['build/**/*'], cb);
});


gulp.task('sassdoc', function() {
  return gulp.src('./app/assets/sass/**/*')
    .pipe(sassdoc());
});





// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});


// run from the build folder
gulp.task('serve-build', [], function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});


//build
gulp.task('build', ['clean:dist', 'sass-dist', 'copy:angular-i18n'], function() {
  runSequence(
    'usemin',
    'copy:modules',
    'copy:core-templates',
    'copy:json-data',
    'copy:json-core-data',
    'copy:images',
    'copy:fonts',
    'copy:core-config',
    'copy:json-i18n-data'
  );
});


// run this to open project in browser and watch for changes in CSS
gulp.task('default', ['watch'], function() {});

// Watch
gulp.task('watch', ['browser-sync', 'sass', 'copy:angular-i18n'], function() {

  gulp.watch(['app/assets/sass/**/*.scss', 'app/modules/**/*.scss'], {interval: 500}, ['sass']);

  gulp.watch(['app/core/**/*.js', 'app/modules/**/*.js', 'app/core/**/*.json', '!app/modules/i18n/angular-i18n/*.js'], {interval: 500}, reload);

  gulp.watch(['app/core/**/*.html', 'app/modules/**/*.html'], {interval: 500}, reload);

});
