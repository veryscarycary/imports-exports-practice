const favoriteDirector = {
  name: 'Ken Somebody',
  genre: 'Musical',
  nationality: 'Irish',
};

function favoriteMovie() {
  return { title: 'Grease', director: 'Ken Somebody' };
}

/*
    The exports variable is available within a module's file-level scope,
    and is assigned the value of module.exports before the module is evaluated.

    It allows a shortcut, so that module.exports.f = ... can be written more succinctly as exports.f = .... However, be aware that like any variable, if a new value is assigned to exports, it is no longer bound to module.exports:

    module.exports.hello = true; // Exported from require of module
    exports = { hello: false };  // Not exported, only available in the module
    When the module.exports property is being completely replaced by a new object, it is common to also reassign exports:

    module.exports = exports = function Constructor() {
      // ... etc.
    };
*/

/*
  exports.favoriteDirector = favoriteDirector;
  and
  exports.favoriteMovie = favoriteMovie;

  works here, but if we were to do

  exports = {
    favoriteDirector: favoriteDirector,
    exports.favoriteMovie: favoriteMovie
  }

  it wouldn't be exported.
*/

exports.favoriteDirector = favoriteDirector;
exports.favoriteMovie = favoriteMovie;
