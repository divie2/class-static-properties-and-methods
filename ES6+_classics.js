class DescriptiveStatistics {
  // Measures of Central Tendency

  // Mean
  static mean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  // Median
  static median(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  // Mode
  static mode(numbers) {
    const frequencyMap = new Map();

    numbers.forEach((num) => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    let mode;
    let maxFrequency = 0;

    frequencyMap.forEach((frequency, num) => {
      if (frequency > maxFrequency) {
        mode = num;
        maxFrequency = frequency;
      }
    });

    return mode;
  }

  // Measures of Dispersion

  // Range
  static range(numbers) {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return max - min;
  }

  // Variance
  static variance(numbers) {
    const meanValue = this.mean(numbers);
    const squaredDifferences = numbers.map((num) => Math.pow(num - meanValue, 2));
    return this.mean(squaredDifferences);
  }

  // Standard Deviation
  static standardDeviation(numbers) {
    return Math.sqrt(this.variance(numbers));
  }

  // Interquartile Range (IQR)
  static interquartileRange(numbers) {
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const lowerQ = this.median(sortedNumbers.slice(0, Math.floor(sortedNumbers.length / 2)));
    const upperQ = this.median(sortedNumbers.slice(Math.ceil(sortedNumbers.length / 2)));

    return upperQ - lowerQ;
  }

  // Mean Absolute Deviation (MAD)
  static meanAbsoluteDeviation(numbers) {
    const meanValue = this.mean(numbers);
    const absoluteDeviations = numbers.map((num) => Math.abs(num - meanValue));
    return this.mean(absoluteDeviations);
  }
}

// Example usage
const dataset = [2, 4, 6, 8, 10, 12, 14];

console.log("Mean:", DescriptiveStatistics.mean(dataset));
console.log("Median:", DescriptiveStatistics.median(dataset));
console.log("Mode:", DescriptiveStatistics.mode(dataset));

console.log("Range:", DescriptiveStatistics.range(dataset));
console.log("Variance:", DescriptiveStatistics.variance(dataset));
console.log("Standard Deviation:", DescriptiveStatistics.standardDeviation(dataset));
console.log("Interquartile Range:", DescriptiveStatistics.interquartileRange(dataset));
console.log("Mean Absolute Deviation:", DescriptiveStatistics.meanAbsoluteDeviation(dataset));