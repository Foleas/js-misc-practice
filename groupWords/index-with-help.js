let stringArray = ["kabak", "kot", "bakak", "tok", "new", "kakab"];

const groupWords = (words) => {
  let groupedWords = [];
  let tempWords = "";
  for (let i = 0; i < words.length; i++) {
    if (groupedWords.join(" ").includes(words[i])) continue;
    tempWords = "";
    tempWords += words[i];

    for (let idx = i + 1; idx < words.length; idx++) {
      if (
        words[i].split("").sort().join("") ===
        words[idx].split("").sort().join("")
      ) {
        tempWords += " " + words[idx];
      }
    }

    groupedWords.push(tempWords);
  }

  return groupedWords;
};

console.log(groupWords(stringArray));
// ["kabak bakak kakab", "kot tok", "new"]
