var normalizedData = movies.map(function (movie, index) {
  return {
    id: index,
    title: movie.Title,
    year: movie.movie_year,
    genres: movie.Categories.split('|'),
    summary: movie.summary,
    imdb_rating: movie.imdb_rating,
    runtime: movie.runtime,
    youtube_id: movie.ytid
  };
}).sort(function (a, b) {
  if (a.imdb_rating > b.imdb_rating) {
    return -1;
  } else {
    return 1;
  }
  return 0;
});