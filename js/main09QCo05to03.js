// Conditionals: Ternary Operator

// syntax:
// condition ? ifTrue : ifFalse;

let soup;
let isCustomerBanned = false;
let soupAccess = 
    isCustomerBanned 
        ? "Sorry, no soup for you!" 
        : soup
        ? `Yes, we have ${soup} today.`
        : "Sorry, no soup today.";

console.log(soupAccess);