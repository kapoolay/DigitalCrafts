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
                        <a href="#" class="btn btn-primary">ADD!</a>
                    </div>
                </div>
            </div>
            `;
      });
      return movieHTML.join('');
    }

    let content = document.getElementById('movies-container');
    // content.innerHTML = renderMovies(movieData);ddd

  });