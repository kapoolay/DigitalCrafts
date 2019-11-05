/*~~~~~~~~~~~~~~~~~~~~~~~~~~
    RENDER FUNCTION
~~~~~~~~~~~~~~~~~~~~~~~~~~*/

document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
      var movieHTML = movieArray.map(function (currentMovie){
        return `
            <div class="movie">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap" style="width:auto; height: 450px;">
                    <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title} <span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                        <p class="card-text">IMDB ID: ${currentMovie.imdbID}</p>
                        <a href="#" class="btn btn-primary" onClick='saveToWatchlist("${currentMovie.imdbID}")'>ADD!</a>
                    </div>
                </div>
            </div>
            `;
      });
      return movieHTML.join('');
    }


    //Form Submit Listener - search button for the movies
    // NEEDS WORK!!!
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let searchString = document.getElementById('search-bar');
        let urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function(response) {
                console.log(response);
                let content = document.getElementById('movies-container')
                content.innerHTML = renderMovies(response.data.Search);
        })


        
    });


    // let content = document.getElementById('movies-container');
    // content.innerHTML = renderMovies(movieData);

  });



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  SAVE TO WATCH LIST FUNCTION
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function saveToWatchlist(imdbID) {
    let movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null) {
        watchlist = [];
    };
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
};