//you may be expecting bar to be assigned the value of the
// default export. But as we can see, the default export
// is assigned to the default property!
var bam = require('./input');
console.log(bam);

// So in order to access the default export we actually have to do

var bang = require('./input').default;
console.log(bang);

// If we use ES6 module syntax, namely:
import bing from './input';
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
import * as boom from './input';
console.log(boom);

// an exported variable under the name 'foo' exists in ./input, so we
// are able to grab it directly by name.
import { foo } from './input';
console.log(foo);
