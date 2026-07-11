// This week's question:
// You have a "mini" version of solitaire in front of you.
// There is a row of cards, where each card has a rank from 1 to 13 and a color of "red" or "black".
// In one move, you may place a card onto another card immediately to its left if its rank is exactly one less and its color is opposite,
// then remove the moved card from its original position.
// Return the maximum number of valid moves you can make by repeatedly scanning left to right.
//
// Example:
//
// const cards = [
//   { rank: 7, color: "black" }, { rank: 6, color: "red" }, { rank: 5, color: "black" }, { rank: 9, color: "red" }
// ];
//
// const cards2 = [
//   { rank: 8, color: "black" }, { rank: 7, color: "red" }, { rank: 6, color: "red" }, { rank: 5, color: "black" }
// ];
//
// > maxSolitaireMoves(cards)
// > 2 // 6 onto 7, 5 onto 6
//
// > maxSolitaireMoves(cards2)
// > 2 // 7 onto 8, 5 onto 6

const maxSolitaireMoves = (cards) => {

    if (!cards?.length) return;

    let moves = 0;

    for (let i = (cards.length - 1); i >= 0; i--) {

      const card = cards[i];

      for (let j = (i - 1); j >= 0; j--) {

        const nextCard = cards[j]; 

        if (nextCard.color !== card.color) {

          if ((nextCard.rank - 1) === card.rank 
            || (nextCard.rank + 1) === card.rank) moves++

        }

      }

    }

    return moves;

}

function make() {

  console.log(
      maxSolitaireMoves([
        { rank: 7, color: "black" },
        { rank: 6, color: "red" },
        { rank: 5, color: "black" },
        { rank: 9, color: "red" }
      ])
  );

}

make();
