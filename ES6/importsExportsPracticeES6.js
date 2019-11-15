// what are the results of each of these lines?
var bam = require('./input');
console.log(bam);

// and this?
var bang = require('./input').default;
console.log(bang);

// and this?
import bing from './input';
console.log(bing);

// and this?
import * as boom from './input';
console.log(boom);

// what about this?
import { foo } from './input';
console.log(foo);
