function renderPokerHand(pokerHand) {
    let cardHTML = pokerHand.map(function(card){
        let cardCode = card.value + card.suit;
        let cardImage = `
        <img src="cards/${cardCode}.png" alt="Card ${cardCode}" style="width: 100px; padding-top: 10px;">
        ` 
        return cardImage;
    
    }).join('');
    
    return `<div class="poker">${cardHTML}</div>`;
    
    
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