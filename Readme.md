*This repository is a mirror of the [component](http://component.io) module [jwerle/console-stream](http://github.com/jwerle/console-stream). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jwerle-console-stream`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
console-stream
=====

Stream interface around console methods

## install

Install with [component(1)](http://component.io):

```sh
$ component install jwerle/console-stream
```

## api

### ConsoleStream(/*Console|Object*/ console [, /*String*/fn])

* `console` - A `Console` object
* `fn` - The method name to write with (default: log)

## usage

```js
var ConsoleStream = require('console-stream');
var stream = require('through')();
var cstream = ConsoleStream(console);

stream.pipe(cstream);
stream.write('beep');
```

## license

MIT
