
function renderMovies(movies) {
    let posterRender = '';

    for (let i = 0; i < movies.length; i++) {
        let rating = movies[i].rottenTomatoesRating * 100;

        posterRender += `
        <div style="display: flex;flex-direction:row;background-color: rgb(174, 174, 174);border-radius: 20px;margin: 40px 0;padding: 30px;">
            <img class="poster" src = "${movies[i].poster}">
            <div style="display: flex;flex-direction: column;margin-left: 50px;padding: 20px;background-color: rgb(222, 222, 222);border-radius: 20px;width: 60%;">
                <div>
                    <h1 style="font-weight: bold;">${movies[i].title}</h1>
                    <h4>${movies[i].year}</h4>
                </div>
                <div style="margin-top: 40px;">
                    <h2>IMDB:</h2>
                    <h2>${movies[i].imdbRating} / 10</h2>
                </div>
                <div style="margin-top: 40px;">
                    <h2>Rotten Tomatoes:</h2>
                    <h2>${rating}%</h2>
                </div>
            </div>
        </div
        `
    }
    return posterRender;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}