function renderCardHTML(card) {
    let cardCode = card.value + card.suit;
    return `
        <img src="cards/${cardCode}.png" alt="Card ${cardCode}" style="width:130px; padding-top:10px;"/>
    `
}

function renderPokerHand(array) {
    let arrayOfCardsHTML = array.map(renderCardHTML);
    cardsHTML = arrayOfCardsHTML.join('');
    return `
        <div class="text-center mt-5">
            <code>${cardsHTML}</code>
        </div>
    `
}

function pokerHand() {
    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    var content = document.getElementById('content');
    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}