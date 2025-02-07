let x = 10;
let y = 3;

// Arithmetic Operators
console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // Modulus (remainder of division)
console.log(x ** 2); // Exponentiation (x squared)
console.log(x ** y); // Exponentiation (x to the power of y)

// Assignment Operators
let a = 10; // Assigns the value from the right-hand side (RHS) to the left-hand side (LHS)
console.log(a);
a += 10; // Equivalent to a = a + 10
console.log("Value of a after addition is", a);

a %= 3; // Equivalent to a = a % 3
console.log("Value of a after storing remainder is", a);

a *= 5; // Equivalent to a = a * 5
console.log("Value of a after multiplication is", a);

a -= 3; // Equivalent to a = a - 3
console.log("Value of a after subtraction is", a);

a /= 2; // Equivalent to a = a / 2
console.log("Value of a after division is", a);

a **= 2; // Equivalent to a = a ** 2 (a raised to the power of 2)
console.log("Value of a after exponentiation is", a);
