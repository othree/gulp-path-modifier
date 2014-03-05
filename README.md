Modify relative url of selected elements

USAGE
-----


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


LICENSE
-------

MIT
