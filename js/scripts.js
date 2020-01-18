// Data
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

// DOM
// Search form
var searchFormElement = document.querySelector('.search-form');
var titleInputElement = document.querySelector('#title-input');
var genreSelectElement = document.querySelector('#genre-select');
var minYearElement = document.querySelector('#min-year-input');
var maxYearElement = document.querySelector('#max-year-input');

// Movies List
var moviesListElement = document.querySelector('.movies__list');
var movieTemplate = document.querySelector('#movie-template').content;

// Watchlist
var watchlistElement = document.querySelector('.watchlist__list');
var watchlistItemTemplate = document.querySelector('#watchlist-item-template').content;

// Modal
var modalElement = document.querySelector('.modal');
var modalCloseButtonElement = document.querySelector('.modal__close-button');
var modalMovieTitleElement = document.querySelector('.modal__movie-title');
var modalMovieSummaryElement = document.querySelector('.modal__movie-summary');

// Helper DOM functions
var createMovieElement = function (movie) {
  var movieElement = document.importNode(movieTemplate, true);

  movieElement.querySelector('.movie__title').textContent = movie.title;
  movieElement.querySelector('.movie__rating').textContent = movie.imdb_rating;
  movieElement.querySelector('.movie__year').textContent = movie.year;
  movieElement.querySelector('.movie__genres').textContent = movie.genres.join(', ');
  movieElement.querySelector('.movie__trailer-link').href += movie.youtube_id;
  movieElement.querySelector('.movie__summary-button').dataset.summary = movie.summary;
  movieElement.querySelector('.movie__bookmark').dataset.id = movie.id;

  return movieElement;
};

var createMoviesFragmentElement = function (movies) {
  var moviesFragment = document.createDocumentFragment();

  movies.forEach(function (movie) {
    moviesFragment.appendChild(createMovieElement(movie));
  });

  return moviesFragment;
}
