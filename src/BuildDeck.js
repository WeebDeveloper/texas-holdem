import cardObj from "./cardObj.js";

export default function BuildDeck() {
    //This function declares the suits and ranks, then pushes them into individual card objects, and returns a full deck of objects.
    const deckSuits = ["Spades", "Clubs", "Diamonds", "Hearts"];
    const deckRanks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    let myDeck = [];

    //for a pass, the first for loop checks s < deckSuits, and assigns a suit, from deckSuits, then checks r< deckRanks, and assigns ranks from deckRanks to that suit, until the subpass is completed. After which, the pass completes, and checks the first for loop again.this creates a new card object, and pushes it into the cards array
    for (let s = 0; s < deckSuits.length; s++) {
      for (let r = 0; r < deckRanks.length; r++) {
        //for cardObj, we push the value r + 1 into value, since r begins at 0, then push deckRanks[r] to rank, and deckSuits[s] into suit
        myDeck.push(new cardObj(r + 1, deckRanks[r], deckSuits[s]));
      }
    }
    return myDeck;
  }