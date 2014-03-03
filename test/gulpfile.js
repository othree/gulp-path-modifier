/*jslint indent: 2 */
var modf = require('..');
var gulp = require('gulp');

function modifier(link) {
  "use strict";
  if (link && !/^((http|https|ftp|rtsp|mms):)?\/\//.test(link)) {
    return '/appended-path' + link;
  }
  return link;
}

gulp.task('default', function () {
  "use strict";

  gulp.src('./cases/*.html')
    .pipe(modf('img', modifier))
    .pipe(gulp.dest('./output'));
});
