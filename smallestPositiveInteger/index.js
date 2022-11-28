// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionMine(numberArray) {
  // write your code in JavaScript (Node.js 14)
  const uniqueOrdered = numberArray
    .sort()
    .filter((number, index, array) => array.indexOf(number) === index);
  console.log("uniqueOrdered", uniqueOrdered);
  const maxValue = Math.max(...A);
  console.log("maxValue", maxValue);
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    console.log("A value", A[i]);
    console.log(i, "index + 1 ", i + 1);
    // SI SON MENORES DE 0
    if (A[i] < 0) {
      result = 1;

      // SI NO SON CONSECUTIVOS
    } else if (A[i] < maxValue) {
      result = i + 1;
    } else {
      result = numberArray.length + 1;
    }

    console.log("result", result);
  }

  return result;
}

function solution(A) {
  // only positive values, sorted
  A = A.filter((x) => x >= 1).sort();
  console.log("filter & sorted", A);

  let x = 1;

  for (let i = 0; i < A.length; i++) {
    // if we find a smaller number no need to continue, cause the array is sorted
    console.log("X", x);
    if (x < A[i]) {
      console.log("menr");
      return x;
    }
    x = A[i] + 1;
  }

  return x;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); //4
console.log(solution([-1, -3])); // 1
