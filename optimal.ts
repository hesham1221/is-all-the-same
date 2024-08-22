import { sentenceList1, sentenceList2, sentenceList3 } from "./constants";

// This solution is more optimized and faster
// Total Time Complexity: O(m⋅n) which is better 
// Frequency Calculation : O(n)
// Creating Frequency Records: O(m⋅n)
// Comparison : O(n)

function isAllTheSame(sentenceList: Array<Array<string>>): boolean {
  let isTheSame = true;

  const getFrequencyRecord = (
    sentence: Array<string>
  ): Record<string, number> => {
    const freqRecord: Record<string, number> = {};
    sentence.forEach((word) => {
      freqRecord[word] = (freqRecord[word] || 0) + 1;
    });
    return freqRecord;
  };

  const firstFreqRecord = getFrequencyRecord(sentenceList[0]);

  sentenceList.forEach((sentence) => {
    const currentFreqRecord = getFrequencyRecord(sentence);

    const firstKeys = Object.keys(firstFreqRecord);
    const currentKeys = Object.keys(currentFreqRecord);

    if (firstKeys.length !== currentKeys.length) {
      isTheSame = false;
      return;
    }

    firstKeys.forEach((word) => {
      if (currentFreqRecord[word] !== firstFreqRecord[word]) {
        isTheSame = false;
        return;
      }
    });
  });

  return isTheSame;
}


console.log("Optimal Solution : ", isAllTheSame(sentenceList1)); // true
console.log("Optimal Solution : ", isAllTheSame(sentenceList2)); // false
console.log("Optimal Solution : ", isAllTheSame(sentenceList3)); // false
console.log('\n')
