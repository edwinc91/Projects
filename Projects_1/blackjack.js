var deck = [
  {Card: '2', Suit: 'Diamond', Value: 2},
  {Card: '2', Suit: 'Clover', Value: 2},
  {Card: '2', Suit: 'Heart', Value: 2},
  {Card: '2', Suit: 'Spade', Value: 2},
  {Card: '3', Suit: 'Diamond', Value: 3},
  {Card: '3', Suit: 'Clover', Value: 3},
  {Card: '3', Suit: 'Heart', Value: 3},
  {Card: '3', Suit: 'Spade', Value: 3},
  {Card: '4', Suit: 'Diamond', Value: 4},
  {Card: '4', Suit: 'Clover', Value: 4},
  {Card: '4', Suit: 'Heart', Value: 4},
  {Card: '4', Suit: 'Spade', Value: 4},
  {Card: '5', Suit: 'Diamond', Value: 5},
  {Card: '5', Suit: 'Clover', Value: 5},
  {Card: '5', Suit: 'Heart', Value: 5},
  {Card: '5', Suit: 'Spade', Value: 5},
  {Card: '6', Suit: 'Diamond', Value: 6},
  {Card: '6', Suit: 'Clover', Value: 6},
  {Card: '6', Suit: 'Heart', Value: 6},
  {Card: '6', Suit: 'Spade', Value: 6},
  {Card: '7', Suit: 'Diamond', Value: 7},
  {Card: '7', Suit: 'Clover', Value: 7},
  {Card: '7', Suit: 'Heart', Value: 7},
  {Card: '7', Suit: 'Spade', Value: 7},
  {Card: '8', Suit: 'Diamond', Value: 8},
  {Card: '8', Suit: 'Clover', Value: 8},
  {Card: '8', Suit: 'Heart', Value: 8},
  {Card: '8', Suit: 'Spade', Value: 8},
  {Card: '9', Suit: 'Diamond', Value: 9},
  {Card: '9', Suit: 'Clover', Value: 9},
  {Card: '9', Suit: 'Heart', Value: 9},
  {Card: '9', Suit: 'Spade', Value: 9},
  {Card: '10', Suit: 'Diamond', Value: 10},
  {Card: '10', Suit: 'Clover', Value: 10},
  {Card: '10', Suit: 'Heart', Value: 10},
  {Card: '10', Suit: 'Spade', Value: 10},
  {Card: 'Jack', Suit: 'Diamond', Value: 10},
  {Card: 'Jack', Suit: 'Clover', Value: 10},
  {Card: 'Jack', Suit: 'Heart', Value: 10},
  {Card: 'Jack', Suit: 'Spade', Value: 10},
  {Card: 'Queen', Suit: 'Diamond', Value: 10},
  {Card: 'Queen', Suit: 'Clover', Value: 10},
  {Card: 'Queen', Suit: 'Heart', Value: 10},
  {Card: 'Queen', Suit: 'Spade', Value: 10},
  {Card: 'King', Suit: 'Diamond', Value: 10},
  {Card: 'King', Suit: 'Clover', Value: 10},
  {Card: 'King', Suit: 'Heart', Value: 10},
  {Card: 'King', Suit: 'Spade', Value: 10},
  {Card: 'Ace', Suit: 'Diamond', Value: undefined},
  {Card: 'Ace', Suit: 'Clover', Value: undefined},
  {Card: 'Ace', Suit: 'Heart', Value: undefined},
  {Card: 'Ace', Suit: 'Spade', Value: undefined}
];

var playerCardValue = undefined;
var dealerCardValue = undefined;

var blackjack = {
  cards: deck,
  rounds: 0,
  inPlay: {
    playerAces: [], // if playerAces.length > 2 - playerAces[1].value = 1
    dealerAces: [], // ^^
    playerCards: [],
    dealerCards: [],
  },
  usedCards: [],

  dealPlayerCard1: function () {
    var playerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualFirstCard = deck[playerFirstCardDealtRandomizedNumber];
    if (playerActualFirstCard.Card == 'Ace') {
      blackjack.inPlay.playerAces.push(playerActualFirstCard)
      blackjack.inPlay.playerAces[0].Value = 11
    } else {
      blackjack.inPlay.playerCards.push(playerActualFirstCard);
    };
    deck.splice(playerFirstCardDealtRandomizedNumber, 1);
    this.updatePlayerCard1Value();
  },
  dealDealerCard1: function () {
    var dealerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualFirstCard = deck[dealerFirstCardDealtRandomizedNumber];
    if (dealerActualFirstCard.Card == 'Ace') {
      blackjack.inPlay.dealerAces.push(dealerActualFirstCard)
      blackjack.inPlay.dealerAces[0].Value = 11
    } else {
      blackjack.inPlay.dealerCards.push(dealerActualFirstCard);
    };
    deck.splice(dealerFirstCardDealtRandomizedNumber, 1);
    this.dealerCard1Value();
  },
  dealPlayerCard2: function () {
    var playerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualSecondCard = deck[playerSecondCardDealtRandomizedNumber];
    if (playerActualSecondCard.Card == 'Ace') {
      blackjack.inPlay.playerAces.push(playerActualSecondCard)
      if (blackjack.inPlay.playerAces.length = 1) {
        blackjack.inPlay.playerAces[0].Value = 11
      } else if (blackjack.inPlay.playerAces.length = 2) {
        blackjack.inPlay.playerAces[0].Value = 11
        blackjack.inPlay.playerAces[1].Value = 1
      }
    } else {
      blackjack.inPlay.playerCards.push(playerActualSecondCard);
    };
    deck.splice(playerSecondCardDealtRandomizedNumber, 1);
    this.updatePlayerCard2Value();
  },
  dealDealerCard2: function () {
    var dealerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualSecondCard = deck[dealerSecondCardDealtRandomizedNumber];
    if (dealerActualSecondCard.Card == 'Ace') {
      blackjack.inPlay.dealerAces.push(dealerActualSecondCard)
      if (blackjack.inPlay.dealerAces.length = 1) {
        blackjack.inPlay.dealerAces[0].Value = 11
      }
    } else {
      blackjack.inPlay.dealerCards.push(dealerActualSecondCard);
    };
    deck.splice(dealerSecondCardDealtRandomizedNumber, 1);
  },
  // updatePlayerCardValue: function () {
  //   var playersCurrentCards = blackjack.inPlay.playerCards;
    // for (i = 0; i < playersCurrentCards.length; i++) {
    //   currentPlayerCardValue = parseInt(playersCurrentCards[i].Card)
    //   currentPlayerCardValue = currentPlayerCardValue + new currentPlayerCardValue
    //   playerCardValue = currentPlayerCardValue
    // };
  updatePlayerCard1Value : function () {
    var playerCard1Value = blackjack.inPlay.playerCards[0].Value;
    playerCardValue = playerCard1Value
    this.dealDealerCard1();
  },
  updatePlayerCard2Value: function () {
    var playerCard2Value = blackjack.inPlay.playerCards[1].Value;
    playerCardValue = playerCardValue + playerCard2Value;
    this.dealDealerCard2();
  },
  dealerCard1Value: function () {
    var dealerCard1Value = blackjack.inPlay.dealerCards[0].Value;
    dealerCardValue = dealerCard1Value;
    this.dealPlayerCard2();
  },
  showBothofDealersCards: function () {
    var dealerCard2Value = blackjack.inPlay.dealerCards[1].Value;
    if (dealerCardValue !== dealerCard1Value + dealerCard2Value) {
      dealerCardValue = dealerCard1Value + dealerCard2Value
    } else {
      return dealerCardValue;
    }
  },
  dealerHitMechanic: function () {
    if (dealerCardValue < 17) {
      this.dealerHit();
      var numberOfCardsDealerIsHolding = blackjack.inPlay.dealerCards;
      var dealerCard3Value = numberOfCardsDealerIsHolding[numberOfCardsDealerIsHolding.length - 1].Value;
      dealerCardValue = dealerCardValue + dealerCard3Value;}
    // } else if (dealerCardValue = 17 && this.inPlay.dealerCards.contains) {
    //   this.dealerHit();
    //   var dealerCard3Value = blackjack.inPlay.dealerCards[3].Value;
    //   dealerCardValue = dealerCardValue + dealerCard3Value
    // } else if (dealerCardValue = 17 && this.inPlay.dealerCards.contains) {

    else {
      return dealerCardValue;
    }
  },


  dealerHit: function () {
    var dealerXCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualXCard = deck[dealerXCardDealtRandomizedNumber];
    deck.splice(dealerXCardDealtRandomizedNumber, 1);
    blackjack.inPlay.dealerCards.push(dealerActualXCard);
  },
  AceValue: function () {
    for (j = 0; j < this.inPlay.dealerCards.length; j++) {
      if (blackjack.inPlay.dealerCards[j].Card == 'Ace') {
        var dealerAce = blackjack.inPlay.dealerCards[j]
        if (dealerCardValue > 10) {
          dealerAce.Value = 1;
        } else {
          dealerAce.Value = 11;
        };
      };
    };
  },
  //
  AceValue2: function () {
        if(dealerCardValue < 10){
          if(this.inPlay.dealerAce.length > 1){
            this.inPlay.dealerAce[0].value = 11
          }
        }
  },
  //
  playerHitMechanic: function () {
    var that = this;
    $('#HitMe').one("click", function (e) {
      var playerHitCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
      var playerActualHitCard = deck[playerHitCardDealtRandomizedNumber];
      deck.splice(playerHitCardDealtRandomizedNumber, 1);
      if (playerActualHitCard.Card == 'Ace') {
        that.inPlay.playerAces.push(playerActualHitCard)
        if (that.inPlay.playerAces.length = 1 && playerCardValue < 11) {
          that.inPlay.playerAces[0].Value = 11
        } else if (that.inPlay.playerAces.length = 2) {
          that.inPlay.playerAces[0].Value = 11
          that.inPlay.playerAces[1].Value = 1
        }
      } else {
        that.inPlay.playerCards.push(playerActualHitCard);
      }
      var playerHitCardValue = that.inPlay.PlayerCards[that.inPlay.PlayerCards.length].Value;
      playerCardValue = playerCardValue + playerHitCardValue;
      if (playerCardValue > 21) {
        return "Bust!"
      } else {
        // Access button that says Hit again or Stay
      };
    })
  },
  outcome: function () {
    if (playerCardValue > dealerCardValue && playerCardValue < 22) {
      console.log("Player Wins!")
      this.clearTable()
      this.rounds++
      //  Add Code here that adds winnings to bank
    } else if (playerCardValue == dealerCardValue && playerCardValue < 22) {
      console.log("Push!")
      this.clearTable()
      this.rounds++
    } else if (playerCardValue < dealerCardValue && dealerCardValue < 22) {
      console.log("Dealer Wins!")
      this.clearTable()
      this.rounds++
    } else if (dealerCardValue > 21 && playerCardValue < 22) {
      console.log("Player Wins!")
      this.clearTable()
      this.rounds++
    };
  },
  bustingOutcome: function () {
    if (playerCardValue > 21 && dealerCardValue < 22) {
      console.log("Dealer Wins!")
    }
    if (playerCardValue < 22 && dealerCardValue > 21) {
      console.log("Player Wins!")
    }
  },
  clearTable: function() {
    // set up html/css interactions that clear the images of the cards
    for (var q = 0; q < this.inPlay.playerCards.length; q++) {
      this.usedCards.push(this.inPlay.playerCards[q])
    }
    this.inPlay.playerCards = []
    for (var w = 0; w < this.inPlay.playerAces.length; w++) {
      this.usedCards.push(this.inPlay.playerAces[w])
    }
    this.inPlay.playerAces = []
    for (var e = 0; e < this.inPlay.dealerCards.length; e++) {
      this.usedCards.push(this.inPlay.dealerCards[e])
    }
    this.inPlay.dealerCards = []
    for (var r = 0; r < this.inPlay.dealerAces.length; r++) {
      this.usedCards.push(this.inPlay.dealerAces[r])
    }
    this.inPlay.dealerAces = []
    if (deck.length < 20) {
      this.shuffleDeck()
    }
  },
  shuffleDeck: function () {
    for (var k = 0; k < this.usedCards.length; k++) {
      deck.push(this.usedCards[k])
    }
    this.usedCards = []
  },
}
  // Split: function () {
  //   if (/* figure out how to search for duplicate card names at once*/) {
  //     var splitButton = document.querySelector('#Split');
  //     $(splitButton).toggleClass("inactive", addOrRemove);
  //   }
  // }



// aces function?
// function () {
//     for (var i = 0; i < this.inPlay.playerCards.length; i++){
//       if(this.inPlay.playerCards[i].Card === 'Ace'){
//         this.inPlay.hasAce = true;
//       }
//     }
//   }
