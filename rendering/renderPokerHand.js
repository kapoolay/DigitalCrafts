function buildPokerCardHTML (card) {
    const cardCode = card.value + card.suit
    return `
        <img src="cards/${cardCode}.png" alt="Card ${cardCode}" style="width: 120px" />
      `
    }
    function buildPokerHandHTML(pokerHand) {
    const arrayOfCardsHTML = pokerHand.map(buildPokerCardHTML) // map thru each card that is created from the pokerHand array
    const cardsHTML = arrayOfCardsHTML.join('')
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
    var contentEl = document.getElementById('content');
    contentEl.innerHTML = buildPokerHandHTML(pokerHandAbstraction);
    // for testing...
    // contentEl.innerHTML = buildPokerCardHTML(pokerHandAbstraction[0]);
    }