import { sentenceList1, sentenceList2, sentenceList3 } from "./constants";
// This solution is not optimized
// Total Time Complexity: O(m⋅nlogn) which is very bad 
// Average Time Complexity for Sorting (Merge sort Or Tim sort) is O(nlogn)
// Maping O(m⋅nlogn)

function isAllTheSame(sentenceList: Array<Array<string>>): boolean {
  let isTheSame = true;
  const sortedSentences = sentenceList.map((sentence) =>
    sentence.slice().sort().join(" ")
  );
  sortedSentences.forEach((sentence) => {
    if (sentence !== sortedSentences[0]) {
      isTheSame = false;
    }
  });
  return isTheSame;
}

console.log("Brute Force Solution : ", isAllTheSame(sentenceList1)); // true
console.log("Brute Force Solution : ", isAllTheSame(sentenceList2)); // false
console.log("Brute Force Solution : ", isAllTheSame(sentenceList3)); // false
console.log('\n')
