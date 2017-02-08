//Example 1:

console.log(goofyFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));
function goofyFunction(word, number) { //the function will pass in the array for word and the number 3 for number
  return word[3] + word[number+1]; //This will return the word in the 3rd index of the array (which is "Hi ") and the word in the fourth index because of number(which equal 3) plus 1.
}

//Example 2:
console.log(strangeFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 2));
function strangeFunction(word, number) { //the function will pass in the array for word and the number 2 for number
  return word[2] + word[3] + word[number+2];//This will return the word in the 2nd index of the array (which is "Oh! "), the word in the 3rd index (which is "Hi ") and the word in the fourth index because of number(which equal 2) plus 2.
}

// I understand I am probably suppossed to be using a for loop in the solution, but I am still a bit iffy with for loops. I didn't quite understand how it would factor in exactly.

// Pro Mode
var numberArray = [1, 2, 3, 4];
console.log(numberFunction(numberArray));
function numberFunction(number) {
  number = 16;
  if(number > numberArray.length)
  console.warn("Limit Reached");
}
