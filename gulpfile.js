const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

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

function defaultTask(cb) {
  compileSass();
  compileImgs();
  compileJs();
  cb();
}

exports.default = gulp.series(defaultTask);
