// Conditionals: Ternary Operator

// syntax:
// condition ? ifTrue : ifFalse;

let playerOne = "rock";
let computer = "rock";
let result = 
    playerOne === computer
        ? "Tie game!"
        : playerOne === "scissors" && computer === "rock"
        ? "Computer wins!"
        : playerOne === "rock" && computer === "paper"
        ? "Computer wins!"
        : playerOne === "paper" && computer === "scissors"
        ? "Computer wins!"
        : "PlayerOne wins!";
console.log(result);