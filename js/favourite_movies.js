document.addEventListener('DOMContentLoaded', () => {

  const newMovieItem = document.querySelector('#new-movie-form');
  newMovieItem.addEventListener('submit', handleNewMovieItem);

const deleteAll= document.querySelector('#delete-all');
deleteAll.addEventListener('click', handleDeleteAll)
});

const handleNewMovieItem = function(event) {
  event.preventDefault();

  const movieListItem = createMovieListItem(event.target);
  const movieList = document.querySelector('#movie-list');
  movieList.appendChild(movieListItem);

  event.target.reset();
};

const createMovieListItem = function (form) {
  const movieListItem = document.createElement('li');
  movieListItem.classList.add('movie-list-item');

const name = document.createElement('h2');
name.textContent = form.name.value;
movieListItem.appendChild(name);

const year = document.createElement('h3');
year.textContent = form.year.value;
movieListItem.appendChild(year);

const genre = document.createElement('p')
genre.textContent = form.genre.value;
movieListItem.appendChild(genre);

return movieListItem;

}

const handleDeleteAll = function (event){

  const movieList = document.querySelector('#movie-list');
  movieList.innerHtml = '';
};
