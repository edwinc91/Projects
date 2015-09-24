var deck = [
  {Card: '2', Suit: 'Diamond'},
  {Card: '2', Suit: 'Clover'},
  {Card: '2', Suit: 'Heart'},
  {Card: '2', Suit: 'Spade'},
  {Card: '3', Suit: 'Diamond'},
  {Card: '3', Suit: 'Clover'},
  {Card: '3', Suit: 'Heart'},
  {Card: '3', Suit: 'Spade'},
  {Card: '4', Suit: 'Diamond'},
  {Card: '4', Suit: 'Clover'},
  {Card: '4', Suit: 'Heart'},
  {Card: '4', Suit: 'Spade'},
  {Card: '5', Suit: 'Diamond'},
  {Card: '5', Suit: 'Clover'},
  {Card: '5', Suit: 'Heart'},
  {Card: '5', Suit: 'Spade'},
  {Card: '6', Suit: 'Diamond'},
  {Card: '6', Suit: 'Clover'},
  {Card: '6', Suit: 'Heart'},
  {Card: '6', Suit: 'Spade'},
  {Card: '7', Suit: 'Diamond'},
  {Card: '7', Suit: 'Clover'},
  {Card: '7', Suit: 'Heart'},
  {Card: '7', Suit: 'Spade'},
  {Card: '8', Suit: 'Diamond'},
  {Card: '8', Suit: 'Clover'},
  {Card: '8', Suit: 'Heart'},
  {Card: '8', Suit: 'Spade'},
  {Card: '9', Suit: 'Diamond'},
  {Card: '9', Suit: 'Clover'},
  {Card: '9', Suit: 'Heart'},
  {Card: '9', Suit: 'Spade'},
  {Card: '10', Suit: 'Diamond'},
  {Card: '10', Suit: 'Clover'},
  {Card: '10', Suit: 'Heart'},
  {Card: '10', Suit: 'Spade'},
  {Card: 'Jack', Suit: 'Diamond'},
  {Card: 'Jack', Suit: 'Clover'},
  {Card: 'Jack', Suit: 'Heart'},
  {Card: 'Jack', Suit: 'Spade'},
  {Card: 'Queen', Suit: 'Diamond'},
  {Card: 'Queen', Suit: 'Clover'},
  {Card: 'Queen', Suit: 'Heart'},
  {Card: 'Queen', Suit: 'Spade'},
  {Card: 'King', Suit: 'Diamond'},
  {Card: 'King', Suit: 'Clover'},
  {Card: 'King', Suit: 'Heart'},
  {Card: 'King', Suit: 'Spade'},
  {Card: 'Ace', Suit: 'Diamond'},
  {Card: 'Ace', Suit: 'Clover'},
  {Card: 'Ace', Suit: 'Heart'},
  {Card: 'Ace', Suit: 'Spade'}
];

var playerCardValue = undefined;
var dealerCardValue = undefined;

var blackjack = {
  cards: deck,
  rounds: 0,
  inPlay: {
    playerCards: [],
    dealerCards: [],
  },
  usedCards: [],

  dealPlayerCard1: function () {
    var playerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualFirstCard = deck[playerFirstCardDealtRandomizedNumber];
    deck.splice(playerFirstCardDealtRandomizedNumber, 1);
    blackjack.inPlay.playerCards.push(playerActualFirstCard);
  },
  dealDealerCard1: function () {
    var dealerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualFirstCard = deck[dealerFirstCardDealtRandomizedNumber];
    deck.splice(dealerFirstCardDealtRandomizedNumber, 1);
    blackjack.inPlay.dealerCards.push(dealerActualFirstCard);
  },
  dealPlayerCard2: function () {
    var playerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualSecondCard = deck[playerSecondCardDealtRandomizedNumber];
    deck.splice(playerSecondCardDealtRandomizedNumber, 1);
    blackjack.inPlay.playerCards.push(playerActualSecondCard);
  },
  dealDealerCard2: function () {
    var dealerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualSecondCard = deck[dealerSecondCardDealtRandomizedNumber];
    deck.splice(dealerSecondCardDealtRandomizedNumber, 1);
    blackjack.inPlay.dealerCards.push(dealerActualSecondCard);
  },
  updatePlayerCardValue: function () {
    var playersCurrentCards = blackjack.inPlay.playerCards;
    for (i = 0; i < playersCurrentCards.length; i++) {
      var currentPlayerCardValue = parseInt(playersCurrentCards[i].Card);
      currentPlayerCardValue = +currentPlayerCardValue
      playerCardValue = currentPlayerCardValue
    };
    // var playerCard1Value = parseInt(blackjack.inPlay.playerCards[0].Card);
    // var playerCard2Value = parseInt(blackjack.inPlay.playerCards[1].Card);
    // playerCardValue = playerCard1Value + playerCard2Value;
  }
}
