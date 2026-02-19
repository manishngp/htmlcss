let str = "Java 222222 Script!! Aa";

str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

let freq = {};
for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}

let max = 0;
for (let ch in freq) {
  max = Math.max(max, freq[ch]);
}

let result = [];
for (let ch in freq) {
  if (freq[ch] === max) result.push(ch);
}

console.log(result, max); // ["a"] 4
