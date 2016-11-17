var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    gzip = require('gulp-gzip'),
    svgmin = require('gulp-svgmin'),
    imagemin = require('gulp-imagemin'),
    sitemap = require('gulp-sitemap');

//  Minify and compress .html
gulp.task('markdown', function(){
  gulp.src('build/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'))
});

//  Minify and compress .css
gulp.task('styles', function() {
  gulp.src('build/estilos/*.css')
    .pipe(cssmin())
    .pipe(gzip())
    .pipe(gulp.dest('build/estilos'));
});

//  Minify and compress .js
gulp.task('scripts', function () {
  gulp.src('build/javascript/*.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('build/javascript'))
});

//  Minify SVG
gulp.task('svg', function () {
    return gulp.src('build/images/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('build/images'));
});

//  Optimize images
gulp.task('images', () =>
  gulp.src('build/imagenes/**/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest('build/images'))
);

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

// Run previously declared tasks on `gulp`
gulp.task('build', ['markdown', 'styles', 'scripts', 'svg', 'images', 'sitemap']);
