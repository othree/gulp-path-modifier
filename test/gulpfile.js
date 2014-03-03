/*jslint indent: 2 */
var modf = require('..');
var gulp = require('gulp');

function modifier(link) {
  "use strict";
  return '/appended-path/' + link;
}

gulp.task('default', function () {
  "use strict";

  gulp.src('./cases/*.html')
    .pipe(modf('img', modifier))
    .pipe(gulp.dest('./output'));
});
