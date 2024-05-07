import { useState, useEffect } from "react";
// import { deckContext } from "./Helper/context";
//import ShuffleDeck from "./ShuffleDeck"; //Todo: refactor ShuffleDeck
import BuildDeck from "./BuildDeck";

export default function Deck() {
  const [deck, setDeck] = useState([]);

  //calls the makeDeck function, and sets the deck state to the result of that function on the initial render
  useEffect(() => setDeck(BuildDeck()), []);

  //Todo: Make deck 'global' (useContext?), and move ShuffleDeck function to a separate file
  //take two cards from random locations in array deck
  //put the first in a temporary variable
  //put the second, and put it in the first card's original location
  //put the card held in the temporary variable in the second one's position, and repeat 1000 times
  function ShuffleDeck() {
    let deck = BuildDeck();
    for (var i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];
      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
    //console.log("deck shuffled");
    return deck;
  }

  //Todo: Replace stringified deck with a component that displays the deck in a more readable format
  return (
    <>
      <button onClick={() => setDeck(BuildDeck)}>Reset Deck</button>
      <button onClick={() => setDeck(ShuffleDeck())}>Shuffle Deck</button>
      <p>{JSON.stringify(deck)}</p>
    </>
  );
}
