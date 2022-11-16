const nums = [1, 27, 28, 3, 2, 3, 3, 2, 8, 1, 9, 0, 3];

const uniqueSorted = (arr) => {
  return [...new Set(arr)].sort((a, b) => a - b);
};

console.log(uniqueSorted(nums)); // [0,1,2,3,8,9,27,28]
