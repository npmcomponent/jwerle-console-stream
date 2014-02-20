
/**
 * Module dependencies
 */

var through = require('juliangruber-through')

var call = Function.prototype.call.bind(Function.prototype.call);

/**
 * Default console write method
 *
 * @api public
 */

ConsoleStream.DEFAULT_METHOD = 'log';

/**
 * `ConsoleStream' constructor
 *
 * @api public
 * @param {Console|Object} console
 * @param {String} fn - optional
 */

module.exports = ConsoleStream;
function ConsoleStream (console, fn) {
  fn = fn || ConsoleStream.DEFAULT_METHOD;
  var stream = through(write);
  var method = console[fn];

  if ('function' != typeof method) {
    throw new TypeError("`"+ fn + "' is not a `Console' method");
  }

  function write (chunk) {
    if (true == this.paused) {
      this.queue(chunk);
    } else if (null == chunk) {
      this.queue(null);
    } else {
      this.emit('data', chunk);
    }
  }

  stream.on('data', function (buf) {
    call(method, console, buf);
  });

  return stream;
}
