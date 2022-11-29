let stringArray = ["kabak", "kot", "bakak", "tok", "new", "kakab"];

const wordsHaveSameLetter = (word1, word2) => {
  const word1Arr = Array.from(word1).sort();
  const word2Arr = Array.from(word2).sort();
  //   console.log(word1Arr.join(""), word2Arr.join(""));
  if (word1Arr.join("") == word2Arr.join("")) {
    return true;
  } else {
    return false;
  }
};

const groupWords = (strArr) => {
  let result = [];
  for (let i = 0; i < strArr.length; i++) {
    const tempArr = strArr.filter((word) =>
      wordsHaveSameLetter(word, strArr[i])
    );
    console.log("tempArr", tempArr);
    result.push(tempArr);
  }

  return result;
};

// console.log(wordsHaveSameLetter("kabak", "bakak"));
// console.log(groupWords(stringArray));
// ["kabak bakak kakab", "kot tok", "new
