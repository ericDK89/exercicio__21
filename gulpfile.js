const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

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

function defaultTask(cb) {
  compileSass();
  compileImgs();
  cb();
}

exports.default = function () {
  gulp.watch("./src/**", { ignoreInitial: false }, gulp.series(defaultTask));
};
