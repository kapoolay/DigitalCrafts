/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            STATE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var movieData = [];


/*~~~~~~~~~~~~~~~~~~~~~~~~~~
    RENDER FUNCTION
~~~~~~~~~~~~~~~~~~~~~~~~~~*/
document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
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

        return movieHTML.join("");

    };


    //Form Submit Listener - search button for the movies
    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var searchString = document.getElementsByClassName("form-control search-bar")[0].value;
        var urlEncodedSearchString = encodeURIComponent(searchString);
         
        axios.get("https://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function (response) {
            var content = document.getElementById("movies-container");
            movieData = response.data.Search;
            content.innerHTML = renderMovies(movieData);

            console.log(response.data);
        });
    });

});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  SAVE TO WATCH LIST FUNCTION
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function saveToWatchlist(imdbID) {
    var movie = movieData.find(function (currentMovie) { //first item returned to meet test
        return currentMovie.imdbID == imdbID;
    })
    var watchlistJSON = localStorage.getItem("watchlist"); 
    var watchlist = JSON.parse(watchlistJSON); //convert string to JSON object

    if (watchlist === null) { //if true didnt exist
        watchlist = []; //the create new empty array
    }

    watchlist.push(movie);

    watchlistJSON = JSON.stringify(watchlist); //make it string
    localStorage.setItem("watchlist", watchlistJSON); //store as string

    console.log(watchlist);
};