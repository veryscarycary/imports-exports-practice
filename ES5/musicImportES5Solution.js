// This page is designed to test knowledge of global variables and
// how they can persist if the code is run despite not having a variable
// referenced import

console.log('Music');

// functions are hoisted to the top of the execution context, just after
// variable declarations(but before their value assignments), and are scoped
// to the module they're in, not globally
listMusicGenres = function() {
  return ['rock', 'country', 'jazz'];
};

function listBands() {
  return ['ZZ Top', 'The Beatles', 'Linkin Park'];
}

// module scoped
var sound = 'bam!';
// globally scoped, attached to global e.g. global.singSound
singSound = 'lalala!';

// would be the same if we omitted this line and wrote listMusicGenres like this up above:
// listMusicGenres = function() {...}
global.listMusicGenres = listMusicGenres;

// can export anything, not just an object
module.exports = listBands;
