// Calling the require on the module actually executes whatever code is in
// the module. In most cases, the module exports one or more functions or
// an object, which you want to store in a variable. If not, the code still
// runs though.
require('./musicImportES5');

// what is returned by each of these?
sound;
singSound;
listMusicGenres();
listBands();

const listBands = require('./musicImportES5');

// returns?
listBands();

// at this point in the code, how many logs have been printed to the console?

// what does bookRecommendations look like if printed?
const bookRecommendations = require('./bookImportES5');

// what does movieRecommendations look like if printed?
const movieRecommendations = require('./movieImportES5');
