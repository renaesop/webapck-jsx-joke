/**
 * Created by fed on 2017/1/16.
 */
function WebpackJsxPlugin() {

}

WebpackJsxPlugin.prototype.apply = function (compiler) {
  compiler.plugin('run', function (op, cb) {
    const m = require('acorn');
    require('acorn-jsx/inject')(m);
    const raw = m.parse;
    m.parse = function (input, options) {
      return raw(input, Object.assign({
        plugins: {
          jsx: true
        },
      }, options))
    };
    cb(null);
  });
};


module.exports = WebpackJsxPlugin;

