const favoriteDirector = {
  name: 'Ken Somebody',
  genre: 'Musical',
  nationality: 'Irish',
};

function favoriteMovie() {
  return { title: 'Grease', director: 'Ken Somebody' };
}

exports.favoriteDirector = favoriteDirector;
exports.favoriteMovie = favoriteMovie;
