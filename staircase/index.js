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
  //   console.log([...Array(n).keys()]);
  //   return [...Array(n).keys()].forEach((number) =>
  //     console.log("number", number)
  //   );
  return stringReturn;
};

console.log(staircase(5));
console.log(staircase(3));
console.log(staircase(0));
console.log(staircase(1));
