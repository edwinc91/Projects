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

$('#Start').one("click", function (e) {
  $('#Bet').one("click", function (f) {
    blackjack.dealPlayerCard1()
    $('.Bank').text(Number($('.Bank').text()) - 25);
  })
});

$('#Reset').on("click", function (e) {
  $('.Bank').text(200)
  blackjack.inPlay.playerAces = []
  blackjack.killUndefinedFunctionPlayer()
  blackjack.inPlay.dealerAces = []
  blackjack.killUndefinedFunctionDealer()
  blackjack.inPlay.killUndefinedsPlayers = []
  blackjack.inPlay.killUndefinedsDealers = []
  for (var q = 0; q < blackjack.inPlay.playerCards.length; q++) {
    blackjack.usedCards.push(blackjack.inPlay.playerCards[q])
  }
  blackjack.inPlay.playerCards = []
  for (var w = 0; w < blackjack.inPlay.playerAces.length; w++) {
    blackjack.usedCards.push(blackjack.inPlay.playerAces[w])
  }
  blackjack.inPlay.playerAces = []
  for (var e = 0; e < blackjack.inPlay.dealerCards.length; e++) {
    blackjack.usedCards.push(blackjack.inPlay.dealerCards[e])
  }
  blackjack.inPlay.dealerCards = []
  for (var r = 0; r < blackjack.inPlay.dealerAces.length; r++) {
    blackjack.usedCards.push(blackjack.inPlay.dealerAces[r])
  }
  blackjack.inPlay.dealerAces = []

  playerCardValue = 0
  $('.PlayerValue').text(playerCardValue);
  dealerCardValue = 0
  $('.DealerValue').text(dealerCardValue);
  blackjack.rounds = 0
  $('.rounds').text(blackjack.rounds);

  for (var k = 0; k < blackjack.usedCards.length; k++) {
    deck.push(blackjack.usedCards[k])
  }
  blackjack.usedCards = []
  blackjack.startGame();
});

var playerCardValue = undefined;
var dealerCardValue = undefined;

var blackjack = {
  cards: deck,
  rounds: 0,
  inPlay: {
    killUndefinedsPlayers: [],
    killUndefinedsDealers: [],
    playerAces: [], // if playerAces.length > 2 - playerAces[1].value = 1
    dealerAces: [], // ^^
    playerCards: [],
    dealerCards: [],
  },
  usedCards: [],

  startGame: function () {
    $('#Start').one("click", function (e) {
      blackjack.betAgain()
    })
  },

  betAgain: function () {
    $('#Bet').one("click", function (f) {
      blackjack.dealPlayerCard1()
      $('.Bank').text(Number($('.Bank').text()) - 25);
    })
  },

  killUndefinedFunctionPlayer: function () {
    if (this.inPlay.playerAces.length > 0 || this.inPlay.killUndefinedsPlayers.length > 0) {
      this.inPlay.playerAces = this.inPlay.killUndefinedsPlayers.filter(Boolean);
    }
    // else {
      // console.log("Nothing Here")
    // }
  },
  killUndefinedFunctionDealer: function () {
    if (this.inPlay.dealerAces.length > 0 || this.inPlay.killUndefinedsDealers.length > 0) {
      this.inPlay.dealerAces = this.inPlay.killUndefinedsDealers.filter(Boolean);
    }
  // }else {
      // console.log("Nothing Here")
    // }
  },
  dealPlayerCard1: function () {
    var playerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualFirstCard = deck[playerFirstCardDealtRandomizedNumber];
    if (playerActualFirstCard.Card !== 'Ace') {
      blackjack.inPlay.playerCards.push(playerActualFirstCard)
      $('.playercards').text(playerActualFirstCard.Card + " " + playerActualFirstCard.Suit)
    } else {
      blackjack.inPlay.killUndefinedsPlayers.push(playerActualFirstCard)
      $('.playercards').text(playerActualFirstCard.Card + " " + playerActualFirstCard.Suit)
      blackjack.inPlay.killUndefinedsPlayers[0].Value = 11
      this.killUndefinedFunctionPlayer()
    }
    deck.splice(playerFirstCardDealtRandomizedNumber, 1)
    this.killUndefinedFunctionPlayer()
    this.updatePlayerCard1Value()
  },
  dealDealerCard1: function () {
    var dealerFirstCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualFirstCard = deck[dealerFirstCardDealtRandomizedNumber];
    if (dealerActualFirstCard.Card == 'Ace') {
      blackjack.inPlay.killUndefinedsDealers.push(dealerActualFirstCard)
      $('.playercards').text(dealerActualFirstCard.Card + " " + dealerActualFirstCard.Suit)
      blackjack.killUndefinedFunctionDealer()
      blackjack.inPlay.dealerAces[0].Value = 11
      deck.splice(dealerFirstCardDealtRandomizedNumber, 1)
      this.dealerFirstCardisAnAceValue();
    } else {
      blackjack.inPlay.dealerCards.push(dealerActualFirstCard);
      $('.dealercards').text(dealerActualFirstCard.Card + " " + dealerActualFirstCard.Suit)
      deck.splice(dealerFirstCardDealtRandomizedNumber, 1)
      this.dealerFirstCardisNotAnAceValue();
    }
  },
  dealPlayerCard2: function () {
    var playerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var playerActualSecondCard = deck[playerSecondCardDealtRandomizedNumber];
    if (playerActualSecondCard.Card == 'Ace') {
      blackjack.inPlay.killUndefinedsPlayers.push(playerActualSecondCard)
      $('.playercards').text($('playercards').text() + " and " + playerActualSecondCard.Card + " " + playerActualSecondCard.Suit)
      deck.splice(playerSecondCardDealtRandomizedNumber, 1)
      this.killUndefinedFunctionPlayer()
      if (this.inPlay.playerAces.length = 1) {
        blackjack.inPlay.playerAces[0].Value = 11
        blackjack.updatePlayerCardValueSecondCardAce()
      } else if (blackjack.inPlay.playerAces.length > 1) {
        blackjack.inPlay.playerAces[0].Value = 11
        blackjack.inPlay.playerAces[1].Value = 1
        this.updatePlayerCard2ValueTwoAce()
      };
    } else {
      blackjack.inPlay.playerCards.push(playerActualSecondCard)
      $('.playercards').text($('playercards').text() + " and " + playerActualSecondCard.Card + " " + playerActualSecondCard.Suit)
      deck.splice(playerSecondCardDealtRandomizedNumber, 1)
      this.updatePlayerCard2ValueNoAce()
    }
  },
  dealDealerCard2: function () {
    var dealerSecondCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualSecondCard = deck[dealerSecondCardDealtRandomizedNumber];
    this.killUndefinedFunctionDealer();
    if (dealerActualSecondCard.Card == 'Ace') {
      blackjack.inPlay.killUndefinedsDealers.push(dealerActualSecondCard)
      $('.dealercards').text($('.dealercards').text() + " and " + dealerActualSecondCard.Card + " " + dealerActualSecondCard.Suit)
      this.killUndefinedFunctionDealer()
      deck.splice(dealerSecondCardDealtRandomizedNumber, 1);
      if (blackjack.inPlay.dealerAces.length = 1) {
        blackjack.inPlay.dealerAces[0].Value = 11
      }
    } else {
      blackjack.inPlay.dealerCards.push(dealerActualSecondCard);
      $('.dealercards').text($('.dealercards').text() + " and " + dealerActualSecondCard.Card + " " + dealerActualSecondCard.Suit)
      deck.splice(dealerSecondCardDealtRandomizedNumber, 1);
    }
    this.playerStay()
    this.playerHitMechanic()
    // this.playerBlackjackCheck()
  },
  // playerBlackjackCheck: function () {
  //   if (playerCardValue = 21 && dealerCardValue > 9) {
  //     this.playerBlackjackMaybeDealerToo()
  //   } else if (playerCardValue = 21 && dealerCardValue < 10) {
  //     console.log("Player Blackjack!")
  //     this.outcome()
  //   } else {
  //     this.playerStay()
  //     this.playerHitMechanic()
  //   }
  // },
  // updatePlayerCardValue: function () {
  //   var playersCurrentCards = blackjack.inPlay.playerCards;
    // for (i = 0; i < playersCurrentCards.length; i++) {
    //   currentPlayerCardValue = parseInt(playersCurrentCards[i].Card)
    //   currentPlayerCardValue = currentPlayerCardValue + new currentPlayerCardValue
    //   playerCardValue = currentPlayerCardValue
    // };
  updatePlayerCard1Value: function () {
    if (this.inPlay.playerAces.length > 0) {
      var playerFirstCardIsAce = blackjack.inPlay.playerAces[0].Value;
      playerCardValue = playerFirstCardIsAce
      $('.PlayerValue').text(playerCardValue);
    } else {
    var playerCard1Value = blackjack.inPlay.playerCards[0].Value;
      playerCardValue = playerCard1Value
      $('.PlayerValue').text(playerCardValue);
    }
    this.dealDealerCard1()
  },
  updatePlayerCard2ValueNoAce: function () {
    var playerCard2Value = blackjack.inPlay.playerCards[this.inPlay.playerCards.length - 1].Value;
    playerCardValue += playerCard2Value
    $('.PlayerValue').text(playerCardValue);
    this.dealDealerCard2()
  },
  updatePlayerCardValueSecondCardAce: function () {
    var playerSecondCardAceValue = blackjack.inPlay.playerAces[0].Value;
    playerCardValue = blackjack.inPlay.playerCards[0].Value + playerSecondCardAceValue
    $('.PlayerValue').text(playerCardValue);
    this.dealDealerCard2()
  },
  updatePlayerCard2ValueOneAce: function () {
    var playerNonAceValue = blackjack.inPlay.playerCards[0].Value;
    playerCardValue = playerCardValue + playerNonAceValue
    $('.PlayerValue').text(playerCardValue);
    this.dealDealerCard2()
  },
  updatePlayerCard2ValueTwoAce: function () {
    this.inPlay.playerAces[1].Value = 1
    playerCardValue++
    $('.PlayerValue').text(playerCardValue);
    this.dealDealerCard2()
  },
  dealerFirstCardisNotAnAceValue: function () {
    var dealerCard1Value = blackjack.inPlay.dealerCards[0].Value;
    dealerCardValue = dealerCard1Value
    $('.DealerValue').text(dealerCardValue);
    this.dealPlayerCard2()
  },
  dealerFirstCardisAnAceValue: function () {
    var dealerFirstCardIsAnAce = blackjack.inPlay.dealerAces[0].Value;
    dealerCardValue = dealerFirstCardIsAnAce
    $('.DealerValue').text(dealerCardValue);
    this.dealPlayerCard2()
  },
  showBothofDealersCardsNoAce: function () {
    this.inPlay.dealerAces = []
    console.log(this.inPlay.dealerAces)
    if (this.inPlay.dealerAces.length = 0) {
      var dealerCard2Value = blackjack.inPlay.dealerCards[blackjack.inPlay.dealerCards.length - 1].Value;
      dealerCardValue = dealerCardValue + dealerCard2Value
      $('.DealerValue').text(dealerCardValue);
    } else if (this.inPlay.dealerAces.length = 1) {
      if (dealerCardValue !== 0) {
      dealerCardValue = dealerCardValue + blackjack.inPlay.dealerCards[blackjack.inPlay.dealerCards.length - 1].Value
      $('.DealerValue').text(dealerCardValue);
      } else {
        console.log(dealerCardValue)
      }
      // if (this.inPlay.dealerAces.length = 1) {
      //   this.killUndefinedFunctionDealer()
      //   if (this.inPlay.dealerAces.length = 1) {
      //     this.killUndefinedFunctionDealer()
      //     if (this.inPlay.dealerAces.length = 1 && this.inPlay.dealerAces.length = 1) {
      //       this.killUndefinedFunctionDealer()
      //       dealerCardValue = this.inPlay.dealerAces[0].Value + this.inPlay.dealerCards[0].Value
      //     } else if (this.inPlay.dealerAces.length = 0) {
      //       this.showBothofDealersCardsNoAce()
      //     }
      //   }
      // } else {
      //   this.showBothofDealersCardsNoAce()
      // }
    } else {
      dealerCardValue = this.inPlay.dealerAces[0].Value + this.inPlay.dealerAces[1].Value
      $('.DealerValue').text(dealerCardValue);
    }
    console.log(dealerCardValue)
    this.dealerHitConditions()
  },
  playerBlackjackMaybeDealerToo: function () {
    if (playerCardValue = 21 && this.inPlay.dealerAces.length > 0) {
      dealerCardValue = this.inPlay.dealerAces[0].Value + this.inPlay.dealerCards[0].Value
      $('.DealerValue').text(dealerCardValue);
      if (playerCardValue = dealerCardValue) {
        this.outcome()
      } else {
        this.dealerHitConditions()
      }
    }
  },
  showBothofDealersCardsOneAce: function () {
    // this.dealerInsurance()

  },
  showBothofDealersCardsTwoAce: function () {

  },
  // dealerInsurance: function () {
  //   if (this.inPlay.dealerCards[1].Value = 10) {
  //     console.log("Dealer Blackjack!")
  //     this.outcome()
  //   } else {
  //     this.
  //   }
  // },
  dealerHitMechanic: function () {
    var dealerValueAfterTwo = dealerCardValue
    if (dealerCardValue = 17 && this.inPlay.dealerAces.length !== 0) {
      this.dealerHit()
      this.updateDealerHitValue()
    } else if (dealerCardValue < 17) {
      this.dealerHit()
      this.updateDealerHitValue()
    } else if (dealerCardValue > 21) {
      this.bustingOutcome()
    } else {
      this.dealerStay()
    }
  },
  updateDealerHitValue: function () {
    this.killUndefinedFunctionDealer()
    if (this.inPlay.dealerAces.length = 0) {
      var numberOfCardsDealerIsHolding = blackjack.inPlay.dealerCards.length
      var dealerCard3Value = blackjack.inPlay.dealerCards[numberOfCardsDealerIsHolding - 1].Value
      dealerCardValue = dealerCardValue + dealerCard3Value
      $('.DealerValue').text(dealerCardValue);
    } else if (this.inPlay.dealerAces.length !== 0 && dealerCardValue < 11) {
      this.inPlay.dealerAces[0].Value = 11
      dealerCardValue = dealerCardValue + this.inPlay.dealerAces[0].Value
      $('.DealerValue').text(dealerCardValue);
    } else if (this.inPlay.dealerAces.length !== 0 && dealerCardValue > 10) {
      this.killUndefinedFunctionDealer()
      this.inPlay.dealerAces[0].Value = 1
      dealerCardValue = dealerCardValue + this.inPlay.dealerAces[0].Value
      $('.DealerValue').text(dealerCardValue);
    }
    this.dealerHitInBetweenStep()
  },
  dealerHitInBetweenStep: function () {
    if (dealerCardValue < 17) {
      this.dealerHitConditions()
    } else if (dealerCardValue > 16 && dealerCardValue < 22 && dealerCardValue == playerCardValue) {
      this.outcome()
    } else {
      this.bustingOutcome()
    }
  },
      // Dealer has an Ace, Soft 17
      // this.dealerHit()
    // } else {
    //   // Dealer has Hard 17 or better
    //   this.dealerStay()
    // }

  // }
  //     if (this.inPlay.dealerAces.length = 1) {
  //       if (this.inPlay.dealerCards[this.inPlay.dealerCards.length - 1].Value > 4) {
  //         this.inPlay.dealerAces[0].Value = 1
  //       } else {
  //         for (var o = 1; o < this.inPlay.dealerAces.length; o++) {
  //           this.inPlay.dealerAces[o].Value = 1
  //         }
  //       }
  //     }
  dealerHit: function () {
    var dealerXCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
    var dealerActualXCard = deck[dealerXCardDealtRandomizedNumber];
    if (dealerActualXCard.Card !== 'Ace') {
      blackjack.inPlay.dealerCards.push(dealerActualXCard)
      var dealerHitCardValue = dealerActualXCard.Value
      dealerCardValue = dealerCardValue + dealerHitCardValue
      $('.DealerValue').text(dealerCardValue);
      deck.splice(dealerXCardDealtRandomizedNumber, 1)
    } else {
      if (dealerCardValue < 11) {
        dealerActualXCard.Value = 11
        blackjack.inPlay.dealerAces.push(dealerActualXCard)
        dealerCardValue = dealerCardValue + dealerActualXCard.Value
        $('.DealerValue').text(dealerCardValue);
      } else if (dealerCardValue > 11) {
        dealerActualXCard.Value = 1
        blackjack.inPlay.dealerAces.push(dealerActualXCard)
        dealerCardValue = dealerCardValue + 1
        $('.DealerValue').text(dealerCardValue);
      }
      deck.splice(dealerXCardDealtRandomizedNumber, 1)
    }
  },
  dealerHitConditions: function () {
    if (dealerCardValue < 18) {
      this.dealerHitMechanic()
    } else if (dealerCardValue > 21) {
      this.bustingOutcome()
    } else {
      this.dealerStay()
    }
  },
  dealerStay: function () {
    console.log(dealerCardValue)
    this.outcome()
  },
  // AceValue: function () {
  //   for (j = 0; j < this.inPlay.dealerCards.length; j++) {
  //     if (blackjack.inPlay.dealerCards[j].Card == 'Ace') {
  //       var dealerAce = blackjack.inPlay.dealerCards[j]
  //       if (dealerCardValue > 10) {
  //         dealerAce.Value = 1;
  //       } else {
  //         dealerAce.Value = 11;
  //       };
  //     };
  //   };
  // },
  // //
  // AceValue2: function () {
  //       if(dealerCardValue < 10){
  //         if(this.inPlay.dealerAce.length > 1){
  //           this.inPlay.dealerAce[0].value = 11
  //         }
  //       }
  // },
  //
  playerHitMechanic: function () {
    var that = this;
    $('#HitMe').one("click", function (e) {
      var playerHitCardDealtRandomizedNumber = Math.floor(Math.random() * deck.length);
      var playerActualHitCard = deck[playerHitCardDealtRandomizedNumber];
      if (playerActualHitCard.Card == 'Ace') {
        that.inPlay.killUndefinedsPlayers.push(playerActualHitCard)
        that.killUndefinedFunctionPlayer()
        if (that.inPlay.playerAces.length = 1) {
          if (playerCardValue < 11) {
            that.inPlay.playerAces[0].Value = 11
          } else {
            that.inPlay.playerAces[0].Value = 1
          }
        } else if (that.inPlay.playerAces.length = 2) {
          if (playerCardValue < 10) {
            that.inPlay.playerAces[0].Value = 11
            that.inPlay.playerAces[1].Value = 1
          } else {
            that.inPlay.playerAces[0].Value = 1
            that.inPlay.playerAces[1].Value = 1
          }
        } else if (that.inPlay.playerAces.length > 2) {
          if (playerCardValue < 11 - that.inPlay.playerAces.length) {
            for (var t = 1; t < that.inPlay.playerAces.length; t++) {
              that.inPlay.playerAces[t].Value = 1
            }
          } else {
            for (var u = 0; t < that.inPlay.playerAces.length; u++) {
              that.inPlay.playerAces[u].Value = 1
          }
        }
      }
    } else {
      that.inPlay.playerCards.push(playerActualHitCard)
    }
    deck.splice(playerHitCardDealtRandomizedNumber, 1)
    if (playerActualHitCard.Card == 'Ace') {
      var playerHitCardisAce = that.inPlay.playerAces[that.inPlay.playerAces.length - 1].Value
      playerCardValue = playerCardValue + playerHitCardisAce
      $('.PlayerValue').text(playerCardValue);
      if (playerCardValue > 21) {
          console.log("Bust!")
          that.bustingOutcome()
      } else {
        that.playerStay()
        that.playerHitMechanic()
        // Access button that says Hit again or Stay
        }
    } else {
      var playerHitCardValue = blackjack.inPlay.playerCards[blackjack.inPlay.playerCards.length - 1].Value;
      playerCardValue = playerCardValue + playerHitCardValue
      $('.PlayerValue').text(playerCardValue);
      if (playerCardValue > 21) {
          console.log("Bust!")
          that.bustingOutcome()
      } else {
        that.playerStay()
        that.playerHitMechanic()
        // Access button that says Hit again or Stay
        }
      }
    })
  },
  playerStay: function () {
    var that = this;
    $('#Stay').one("click", function (e) {
      console.log("Player Stays!")
      that.showBothofDealersCardsNoAce()
    })
  },
  outcome: function () {
    if (playerCardValue > dealerCardValue && playerCardValue < 22) {
      $('.PlayerValue').text("Player Wins!")
      $('.DealerValue').text("Player Wins!")
      $('.Bank').text(Number($('.Bank').text()) + 50);
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
      //  Add Code here that adds winnings to bank
    } else if (playerCardValue == dealerCardValue && playerCardValue < 22) {
      $('.Bank').text(Number($('.Bank').text()) + 25);
      $('.PlayerValue').text("Push!")
      $('.DealerValue').text("Push!")
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
    } else if (playerCardValue < dealerCardValue && dealerCardValue < 22) {
      $('.PlayerValue').text("Dealer Wins!")
      $('.DealerValue').text("Dealer Wins!")
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
    } else if (dealerCardValue > 21 && playerCardValue < 22) {
      $('.PlayerValue').text("Player Wins!")
      $('.DealerValue').text("Player Wins!")
      $('.Bank').text(Number($('.Bank').text()) + 50);
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
    }
  },
  bustingOutcome: function () {
    if (playerCardValue > 21 && dealerCardValue < 22) {
      $('.PlayerValue').text("Dealer Wins!")
      $('.DealerValue').text("Dealer Wins!")
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
    } else if (playerCardValue < 22 && dealerCardValue > 21) {
      $('.PlayerValue').text("Player Wins!")
      $('.DealerValue').text("Player Wins!")
      $('.Bank').text(Number($('.Bank').text()) + 50);
      this.clearTable()
      this.rounds++
      $('.rounds').text(blackjack.rounds)
    }
  },
  clearTable: function() {
    // set up html/css interactions that clear the images of the cards
    this.inPlay.playerAces = []
    this.inPlay.dealerAces = []
    this.inPlay.killUndefinedsPlayers = []
    this.inPlay.killUndefinedsDealers = []
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
    playerCardValue = 0
    $('.PlayerValue').text(playerCardValue);
    dealerCardValue = 0
    $('.DealerValue').text(dealerCardValue);
    this.betAgain()
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
