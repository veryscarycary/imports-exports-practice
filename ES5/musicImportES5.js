console.log('Music');

function listMusicGenres() {
  return ['rock', 'country', 'jazz'];
}

function listBands() {
  return ['ZZ Top', 'The Beatles', 'Linkin Park'];
}

var sound = 'bam!';
singSound = 'lalala!';

global.listMusicGenres = listMusicGenres;

module.exports = listBands;
