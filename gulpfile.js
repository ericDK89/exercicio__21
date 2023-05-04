const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const replace = require("gulp-replace");

function compileSass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./dist/styles"));
}

function compileImgs() {
  return gulp
    .src("./src/assets/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets"));
}

function compileJs() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));
}

function compileHTML() {
  return gulp
    .src("*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

function replaceHTMLRoutes() {
  return gulp
    .src("index.html")
    .pipe(replace("dist/", ""))
    .pipe(gulp.dest("dist"));
}

function replaceCSSRoutes() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(replace("../../dist/assets/", "../assets/"))
    .pipe(gulp.dest("dist"));
}

function defaultTask(cb) {
  compileSass();
  compileImgs();
  compileJs();
  compileHTML();
  replaceHTMLRoutes();
  replaceCSSRoutes();
  cb();
}

exports.default = gulp.series(defaultTask);
