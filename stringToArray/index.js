const string = "string";

// TO ARRAY
console.log("option 1 - split:", string.split(""));
console.log("option 2 - [...]:", [...string]);
console.log("option 3 - Array.from:", Array.from(string));
console.log("option 4 - Object.assign:", Object.assign([], string));

// SORT AND JOIN
console.log("ORT AND JOIN", string.split("").sort().join(""));
