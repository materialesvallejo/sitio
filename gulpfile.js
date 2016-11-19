var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat');
    cssmin = require('gulp-css'),
    transpile = require('gulp-es6-transpiler'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    gzip = require('gulp-gzip'),
    svgmin = require('gulp-svgmin'),
    imagemin = require('gulp-imagemin'),
    // useref = require('gulp-useref');
    sitemap = require('gulp-sitemap');

gulp.task('markup', function(){
  gulp.src('build/**/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('build/'))
})

gulp.task('styles', function(){
  gulp.src(['build/stylesheets/tachyons.css', 'build/stylesheets/site.css'])
  .pipe(concat('site.css'))
  .pipe(cssmin())
  .pipe(gulp.dest('build/stylesheets'))
});

gulp.task('scripts', function(){
  gulp.src('build/javascripts/all.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/javascripts'))
});

gulp.task('images', function(){
  gulp.src('build/images/**/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('build/images'))
});

//  Generate sitemap
gulp.task('sitemap', function() {
  gulp.src('build/**/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: 'https://www.tymforest.com'
  }))
  .pipe(gulp.dest('./build'));
});

//  Delete unused files
gulp.task('delete', function(){
  return del.sync(['build/stylesheets/tachyons.css']);
});

// Run previously declared tasks on `gulp`
gulp.task('build', ['markup', 'styles', 'scripts', 'images', 'sitemap']);
