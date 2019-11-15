// what are the results of each of these lines?
var bam = require('./input.mjs');
console.log(bam);

var bang = require('./input.mjs').default;
console.log(bang);

import bing from './input.mjs';
console.log(bing);

import * as boom from './input.mjs';
console.log(boom);

import { foo } from './input.mjs';
console.log(foo);

import Tiger from './tiger.mjs'
console.log(Tiger)

import * as Tiger from './tiger.mjs'
console.log(Tiger)