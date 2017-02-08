// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));
//
// var numberArray = [1, 2, 3, 4, 5];
// var numberArrayTwo = [6, 7, 8, 9, 10, 11, 12];
// console.log(myFunction(numberArray));
// console.log(myFunction(numberArrayTwo));
// function myFunction(number) {
//   return number[0] + number[3];
// }

console.log(goofyFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));
function goofyFunction(word, number) {
  return word[3] + word[number+1];
}


console.log(strangeFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 2));
function strangeFunction(word, number) {
  return word[2] + word[3] + word[number+2];
}
