
//This is a card object that we will be pushing into our deck. 
//Values are expected to be 1 for a "2" card, 2 for a "3" card, 12 for an "Ace, etc, based on individual card value in most poker games
export default function cardObj(value, rank, suit) {
    return {
      value: value,
      rank: rank,
      suit: suit
    };
  }