const nums = [1, 27, 28, 3, 2, 3, 3, 2, 8, 1, 9, 0, 3];

const uniqueSorted = (arr) => {
  return [...new Set(arr)].sort();
};

const uniqueSorted2 = (arr) => {
  return arr
    .filter((value, index, array) => {
      // console.log("value", value);
      // console.log("index", index);
      // console.log("array", array);
      // console.log("indexOf", array.indexOf(value));
      return array.indexOf(value) === index;
    })
    .sort();
  // .sort((a, b) => a - b)
  // .sort((a, b) => b - a)
};

console.log(uniqueSorted(nums)); // [0,1,2,3,8,9,27,28]
console.log(uniqueSorted2(nums)); // [0,1,2,3,8,9,27,28]
