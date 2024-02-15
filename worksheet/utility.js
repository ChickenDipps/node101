/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

//Create a function called compare that accempts two arrays of numbers and compares the contents.
export function compare(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//Create and export a function called largest that accepts an array of numbers and returns the largest.
export function largest(arr) {
  return Math.max(...arr);
}

//Create and export a function called zeroest that accepts an array of integer numbers and returns the one closest to zero
export function zeroest(arr) {
  return arr.reduce((a, b) => Math.abs(b) < Math.abs(a) ? b : a);
}