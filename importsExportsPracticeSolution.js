// Calling the require on the module actually executes whatever code is in
// the module. In most cases, the module exports one or more functions or
// an object, which you want to store in a variable. If not, the code still
// runs though.
require('./musicImportES5');

// what is returned by each of these?
sound; // ReferenceError: sound is not defined
singSound; // lalala!
listMusicGenres(); // [ 'rock', 'country', 'jazz' ]
listBands(); // ReferenceError: listBands is not defined

const listBands = require('./musicImportES5');

// returns?
listBands();

// at this point in the code, how many logs have been printed to the console?

// Node.js should’ve loaded the module twice, right?
// Nope! Here’s why: Node.js caches loaded modules, so 'Music' is
// printed only once. The second time we assign the cached return value
// listBands variable and are able to call the exported listBands function

// what does bookRecommendations look like if printed?
const bookRecommendations = require('./bookImportES5');
/*
{ favoriteAuthor: { name: 'Ken Bruen', genre: 'Noir', nationality: 'Irish' },
  favoriteBook: [Function: favoriteBook],
  getBookRecommendations: [Function: getBookRecommendations] }
*/

// what does movieRecommendations look like if printed?
const movieRecommendations = require('./movieImportES5');
/*
{ favoriteDirector: { name: 'Ken Somebody', genre: 'Musical', nationality: 'Irish' },
  favoriteMovie: [Function: favoriteMovie] }
*/
