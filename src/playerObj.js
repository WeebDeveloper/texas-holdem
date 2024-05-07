
//creating a player object. 
//Stack refers to how much currency they have available to bet. 
//Bet is the player's current bet
//Condition is the player's current status in the game, such as "folded", "all in", "active", etc.
export default function player(name, hand, stack, bet, condition) {
    return {
      name: name,
      hand: hand,
      stack: stack,
      bet: bet,
      condition: condition
    };
  }