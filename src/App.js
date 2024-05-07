import "./App.css";
import CreateDeck from "./Deck";
// import Card from "./Card";
// import { deckContext } from './Helper/context';

function App() {
  return (
    <>
      {/* <deckContext.Provider value={{deck, setDeck}}> */}
      <h1>Texas Holdem</h1>
      <CreateDeck />
      {/* </deckContext.Provider> */}
    </>
  );
}

export default App;
