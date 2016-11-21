var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    gzip = require('gulp-gzip'),
    imagemin = require('gulp-imagemin'),
    sitemap = require('gulp-sitemap');

//  Minify .html
gulp.task('markup', function(){
  gulp.src('build/**/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('build'))
})

//  Concatenate site.css + animate.css -> site.css
//  Minify site.css + Gzip site.css
gulp.task('styles', function(){
  gulp.src(['build/stylesheets/site.css', 'build/stylesheets/animate.css'])
  .pipe(concat('site.css'))
  .pipe(cssmin())
  .pipe(gulp.dest('build/stylesheets'))
  .pipe(gzip())
  .pipe(gulp.dest('build/stylesheets'))
});

//  Minify all.js
gulp.task('scripts', function(){
  gulp.src('build/javascripts/all.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/javascripts'))
});

//  Optimize images
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
    siteUrl: 'https://materialesvallejo.com'
  }))
  .pipe(gulp.dest('./build'));
});

// Run previously declared tasks on `gulp`
gulp.task('build', ['markup', 'styles', 'scripts', 'images', 'sitemap']);
