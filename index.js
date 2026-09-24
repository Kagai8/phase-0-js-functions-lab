// Function 1: Calculates 10% tax on the given amount
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: Converts a string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: Returns the larger of two numbers
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

// Function 4: Checks if a string is a palindrome
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Function 5: Calculates the final price after a percentage discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };