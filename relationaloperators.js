let x = 10;
let y = 20;
let z = 5;
let a = 10;

// Comparison Operators
console.log("x < y", x < y); // x is less than y (10 < 20) - true
console.log("x > z", x > z); // x is greater than z (10 > 5) - true
console.log("x <= z", x <= z); // x is less than or equal to z (10 <= 5) - false
console.log("x >= a", x >= a); // x is greater than or equal to a (10 >= 10) - true

// Logical Operators
console.log("true && false:", true && false);   // AND: true if both operands are true - false
console.log("true && true:", true && true);     // AND: true if both operands are true - true
console.log("false && false:", false && false);   // AND: true if both operands are true - false
console.log("false && true:", false && true);   // AND: true if both operands are true - false

console.log("true || false:", true || false);   // OR: true if at least one operand is true - true
console.log("true || true:", true || true);     // OR: true if at least one operand is true - true
console.log("false || false:", false || false);   // OR: true if at least one operand is true - false
console.log("false || true:", false || true);   // OR: true if at least one operand is true - true

console.log("(5 < 10) && (6 < 3):", (5 < 10) && (6 < 3));  // AND with comparisons: (true && false) - false

console.log("!(5 < 10):", !(5 < 10)); // NOT: inverts the operand's value - false
