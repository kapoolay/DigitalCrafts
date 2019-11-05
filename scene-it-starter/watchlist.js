document.addEventListener('DOMContentLoaded', function() {
    let watchListJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchListJSON);
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie){
            return `
            <div>
            <div style="display: flex;flex-direction:row;background-color: rgb(174, 174, 174);border-radius: 20px;margin: 40px 0;padding: 30px;">
                <img class="poster" src = "${currentMovie.Poster}">
                <div style="display: flex;flex-direction: column;margin-left: 50px;padding: 20px;background-color: rgb(222, 222, 222);border-radius: 20px;width: 60%;">
                    <div>
                        <h1 style="font-weight: bold;">${currentMovie.Title}</h1>
                        <h4>${currentMovie.Year}</h4>
                    </div>
                    <div style="margin-top: 40px;">
                        <h2>IMDB:</h2>
                        <h2>${currentMovie.imdbRating} / 10</h2>
                    </div>
                    <div style="margin-top: 40px;">
                        <h2>Rotten Tomatoes:</h2>
                        <h2>${rating}%</h2>
                    </div>
                </div>
            </div
        </div>
                `;
        });
        return movieHTML.join('');
    }

    let content = document.getElementById('movies-container');
    content.innerHTML = renderMovies(watchlist);
})