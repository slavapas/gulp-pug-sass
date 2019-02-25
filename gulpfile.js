const gulp = require("gulp");
const sass = require('gulp-sass');
const { series, watch } = require("gulp");
const pug = require("gulp-pug");
const server = require("browser-sync").create();

function style() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function pages() {
  return gulp
    .src("./source/pages/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./build"));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./build"
    }
  });
  done();
}

function copy() {
  return gulp.src("./source/assets/**/*").pipe(gulp.dest("./build"));
}

watch(["./source/styles/**/*.scss", "./source/**/*.scss"], series(style, reload));
watch("./source/blocks/**/*.pug", series(pages, reload));

exports.dev = series(copy, style, pages, serve);
exports.build = series(copy, style, pages);