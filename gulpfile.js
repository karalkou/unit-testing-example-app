var gulp = require("gulp");
var mocha = require("gulp-mocha");

gulp.task("default", () => {
  gulp.watch("./*.js", ["test"]);
});

gulp.task("test", () => {

  gulp.src("./test/**/*.js")
    .pipe(
        mocha({ reporter: "spec" })
    );
});
