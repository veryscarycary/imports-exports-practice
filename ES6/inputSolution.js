// ES6 default exports are actually also named exports, 
// except that default is a "reserved" name and there is 
// special syntax support for it. 
// Lets have a look how Babel compiles named and default exports:

// input
export const foo = 42;
export default 21;

// Babel compiled output to CommonJS:

// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// var foo = exports.foo = 42;
// exports.default = 21; 