/*jslint indent: 2, vars: true */
var es = require('event-stream');
var gutil = require('gulp-util');
var Buffer = require('buffer').Buffer;

var cheerio = require('cheerio');

function modify(file, elem, attr, modifier) {
  "use strict";

  var val = elem.attr(attr);
  if (val) { elem.attr(attr, modifier(val, file)); }
}

module.exports = function (query, modifier) {
  "use strict";

  var queryHtml = function (file) {
    if (file.isNull()) { return this.emit('data', file); } // pass along
    if (file.isStream()) { return this.emit('error', new Error("gulp-coffee: Streaming not supported")); }

    var str = file.contents.toString('utf8');
    var $ = cheerio.load(str);

    $(query).each(function () {
      var elem = $(this);
      modify(file, elem, 'href', modifier);
      modify(file, elem, 'src', modifier);
    });

    file.contents = new Buffer($.root().html());
    this.emit('data', file);
  };

  return es.through(queryHtml);
};
