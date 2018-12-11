'use strict';

const KING = "King";
const OFFICIAL_BOARD_SIZE = 8;

// Enter your js code Here

// Below is an example of 4 individual chess piece objects
//
// var piece1 = {type:"King", location: 27, symbol: "K" };
// var piece2 = {type:"Queen", location: 22, symbol: "Q" };
// var piece3 = {type:"Pawn", location: 12, symbol: "P" };
// var piece4 = {type:"Pawn", location: 9, symbol: "P" };

// below is the same example putting the 4 pieces into an array
var player1Pieces = new Array;
// var player2Pieces = new Array;

// notice the use of the const KING instead of the hard-coded text
player1Pieces.push({type:KING, location: 27, symbol: "K" });
player1Pieces.push({type:"Queen", location: 22, symbol: "Q" });
player1Pieces.push({type:"Pawn", location: 12, symbol: "P" });
player1Pieces.push({type:"Pawn", location: 9, symbol: "P" });
player1Pieces.push({type:"Rook", location: 11, symbol: "R" });

// console.log("The length of my array is " + player1Pieces.length + " Here is the array: " + player1Pieces);

// below is an example of accessing a the location property within an element in the array
console.log("Location of the queen is " + player1Pieces[1].location);

// You can ignore the squares code below.  It was just another way of solving the chess game design
//var squares = new Array;  // length 64
//var aSquare = {status: "Player1", pieceType = "King"}

// Sample switch statement that runs different code depending on the piece type
switch (player1Pieces[4].type)
{
  case "King":
      // check if legal move for a king
    break;

  case "Queen":
      alert("Queen");
      var name = "Jon";
    break;

  case "Pawn":
      alert("Pawn");
    break;

  default:
    alert("None of the above");
}
