//Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace
//the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let newArray = [];

  if (str.length % 2 !== 0) {
    str += "_";
  }
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (i % 2 !== 0) {
      newArray.push(str[i - 1] + letter);
    }
  }
  return newArray;
}
console.log(solution("abc"));
