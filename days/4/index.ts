const isWithin = (firstPair: number[], secondPair: number[]) =>
  (firstPair[0] >= secondPair[0] && firstPair[1] <= secondPair[1]) ||
  (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1]);

const overlaps = (firstPair: number[], secondPair: number[]) =>
  (firstPair[0] >= secondPair[0] && firstPair[0] <= secondPair[1]) ||
  (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[0]);

const findSolution = (
  pairs: string[][],
  callback: (firstPair: number[], secondPair: number[]) => boolean
) =>
  pairs
    .map((pair) => {
      const [first, second] = pair
        .map((str) => str.split("-"))
        .map((str) => str.map((num) => +num));
      return callback(first, second);
    })
    .filter((x) => x === true).length;

const solve = (input: string) => {
  const inputArray = input.split("\n");
  const pairs = inputArray.map((pair) => pair.split(","));
  const solution1 = findSolution(pairs, isWithin);
  const solution2 = findSolution(pairs, overlaps);

  return [solution1, solution2];
};

export default solve;
