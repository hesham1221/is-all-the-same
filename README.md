# is-all-the-same
## Brute Force Solution

The brute force solution checks if all sentences contain the same words by sorting each sentence, converting it to a string, and then comparing these strings. However, it misses the in-depth comparison needed to truly verify that the sentences have identical word frequencies.

### Key Details:
- **String Comparison**: The brute force solution uses string comparison after sorting the words in each sentence. While this method can identify identical sentences, it doesn't account for the frequency of each word in cases where sentences might have the same words in different distributions.
- **Limitation**: This approach may not accurately handle cases where sentences have the same words but different frequencies.

## Optimal Solution

The optimal solution improves upon the brute force method by creating a frequency object for each sentence, where each word is counted and stored. This allows for an accurate comparison of word frequencies across all sentences.

### Key Details:
- **Frequency Calculation**: The optimal solution uses an object to store the frequency of each word in the sentences. This ensures that not only are the words the same across sentences, but their frequencies are also identical.
- **Efficiency**: By comparing these frequency objects, the optimal solution provides a more robust and accurate determination of whether all sentences are the same.

## Usage

To run the solutions, use the npm commands described above. For example, to run both solutions:

```bash
npm start
```

This will execute both the brute force and optimal solutions and display the results in the console.

To run only the brute force solution:

```bash
npm run run:brute-force
```

To run only the optimal solution:

```bash
npm run run:optimal
```

## Conclusion

The optimal solution is generally recommended due to its more accurate handling of word frequencies across sentences. The brute force solution, while simpler, may miss key details in more complex cases.