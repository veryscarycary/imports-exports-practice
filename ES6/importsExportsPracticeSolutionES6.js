//you may be expecting bar to be assigned the value of the
// default export. But as we can see, the default export
// is assigned to the default property!
var bam = require('./input.mjs');
console.log(bam);

// So in order to access the default export we actually have to do

var bang = require('./input.mjs').default;
console.log(bang);

// If we use ES6 module syntax, namely:
// 21
import bing from './input.mjs';
console.log(bing);

// Babel will transform it to:

// 'use strict';
//
// var _input = require('./input');
//
// var _input2 = _interopRequireDefault(_input);
//
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
// console.log(_input2.default);
//
// You can see that every access to bar is converted to access .default.

// * as syntax will take all exported properties and wrap them in an object.
// This is essentially the same thing as var boom = require('./input')
// { default: 21, foo: 42 }
import * as boom from './input.mjs';
console.log(boom);

// an exported variable under the name 'foo' exists in ./input, so we
// are able to grab it directly by name.
// 42
import { foo } from './input.mjs';
console.log(foo);

// export { Tiger } would be equivalent to module.exports.Tiger = Tiger
// So when you use module.exports = Tiger and then attempt import { Tiger } from
//  './tiger' you're effectively asking for Tiger.Tiger.

// If you would like to import:

// module.exports = Tiger
// you may use following construction:

// import Tiger from './tiger' for the direct reference
// import * as Tiger from './tiger', for object wrapping default.

// Another option is changing the export but it is only
// possible if you are the author of the imported code.

// (Below errors)
import { Tiger } from './tiger.mjs'
console.log(Tiger)

// function Tiger ...
import Tiger from './tiger.mjs'
console.log(Tiger)

// { default: function Tiger ... }
import * as Tiger from './tiger.mjs'
console.log(Tiger)

