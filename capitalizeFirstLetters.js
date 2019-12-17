const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(
  capitalizeFirstLetters("javaScript is cool"),
  "JavaScript Is Cool"
);
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters("z"), "Z");
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");