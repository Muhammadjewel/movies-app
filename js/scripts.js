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