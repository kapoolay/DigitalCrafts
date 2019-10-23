
function renderRestaurants(restaurants) {

    var restaurantsHTML = restaurants.map(function(restaurant){
        return `
            <div class="bg-light rounded p-2 w-25 m-2">
                <h3>${restaurant.name}</h3>
                <h5 class="text-secondary">${restaurant.type}</h5>
                <div style="color: lightgreen; font-weight: bold;">${'$'.repeat(restaurant.priceRating)}</div>
            </div>
        `
    });

    return `
        <div class="mt-5 d-flex justify-content-center align-items-start">
            ${restaurantsHTML.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}