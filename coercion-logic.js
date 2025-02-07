// Division by null (which coerces to 0) results in Infinity
console.log(10 / null); // Output: Infinity

// Division of undefined (which coerces to NaN) by null (which coerces to 0) results in NaN
console.log(undefined / null); // Output: NaN

// Logical AND (&&) returns the first falsy value or the last truthy value
// Both 6 and 9 are truthy, so it returns the last truthy value (9)
console.log(6 && 9); // Output: 9

// Logical OR (||) returns the first truthy value or the last falsy value
// 10 is truthy, so it returns 10
console.log(10 || 0); // Output: 10

// Logical OR (||) returns the first truthy value or the last falsy value
// 6 is truthy, so it returns 6
console.log(6 || 19); // Output: 6

// Logical OR (||) returns the first truthy value or the last falsy value
// Both 0 and -0 are falsy, so it returns the last falsy value (-0)
console.log(0 || -0); // Output: -0
