# Original code (no UI): https://codepen.io/weebdev/pen/gdXvWR?editors=1111

---

# Todo
* Make Deck global (UseContext?)
* Refactor ShuffleDeck function and move to separate file
* Work with JSON returned from BuildDeck and visually format
* Create global arrays table, tableHand, discardPileplayer, tableBet, bigBlind, smallBlind, and pot based on original design (React environment variables? https://www.architect.io/blog/2022-08-16/react-environment-variables-developers-guide/)
* Create createPlayer, killPlayer, deal, bet, and other functions based on original design
* Create rules for hands based on ranked number system
- ie: high card == 1, one pair == 2, two pair == 3, etc.
