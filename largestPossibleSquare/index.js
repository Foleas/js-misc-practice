function solution(A, B) {
  const idealSide = parseInt((A + B) / 4);
  console.log("idealSide", idealSide);

  for (let side = idealSide; side > 1; side--) {
    const sticksFromA = parseInt(A / side);
    const sticksFromB = parseInt(B / side);

    console.log("sticksFromA", sticksFromA);
    console.log("sticksFromB", sticksFromB);
    if (sticksFromA + sticksFromB === 4) {
      return side;
    }
  }
  return 0;
}
console.log(solution(10, 21));
console.log(solution(13, 11));
console.log(solution(2, 1));
console.log(solution(1, 8));

/*
1. Given A = 10, B = 21, the function should return 7. We can split the second stick into three sticks of length 7 and shorten the first stick by 3.
2. Given A = 13, B = 11, the function should return 5. We can cut two sticks of length 5 from each of the given sticks.
3. Given A = 2, B = 1, the function should return 0. It is not possible to make any square from the given sticks.
4. Given A = 1, B = 8, the function should return 2. We can cut stick B into four parts.
*/
