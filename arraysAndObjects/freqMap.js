// Problem: Given a string, print each unique character and its frequency.

function getFreq(str) {
  const freqMap = {};

  for (let c of str) {
    if (freqMap[c]) {
      freqMap[c]++;
    } else {
      freqMap[c] = 1;
    }
  }

  return freqMap;
}

console.log(getFreq("javascript"));
