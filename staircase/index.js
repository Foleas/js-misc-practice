// Write a function that will print out a staircase based on the number of levels (n) provided
// e.g. if n = 6, output will be
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// e.g. if n = 5, output will be
//      #
//     ##
//    ###
//   ####
//  #####

const staircase = (n) => {
  const reversedNumbers = [...Array(n).keys()].reverse();
  let stringReturn = "";
  reversedNumbers.forEach((number) => {
    for (let i = 0; i < number; i++) {
      stringReturn += " ";
    }
    for (let i = number; i < n; i++) {
      stringReturn += "#";
    }
    stringReturn += "\n";
  });
  return stringReturn;
};

console.log(staircase(5));
console.log(staircase(3));
console.log(staircase(0));
console.log(staircase(1));

const staircase2 = (n) => {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += " ".repeat(n - i) + "#".repeat(i);
    if (i !== n) output += "\n";
  }
  return output;
};

console.log(staircase2(5));
console.log(staircase2(3));
console.log(staircase2(0));
console.log(staircase2(1));
