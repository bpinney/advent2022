const isWithin = (firstPair: number[], secondPair: number[]) => {
  return (
    (firstPair[0] >= secondPair[0] && firstPair[1] <= secondPair[1]) ||
    (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[1])
  );
};

const overlaps = (firstPair: number[], secondPair: number[]) => {
  return (
    (firstPair[0] >= secondPair[0] && firstPair[0] <= secondPair[1]) ||
    (firstPair[0] <= secondPair[0] && firstPair[1] >= secondPair[0])
  );
};

const solve = (input: string) => {
  const inputArray = input.split("\n");
  const pairs = inputArray.map((pair) => pair.split(","));

  const solution1 = pairs
    .map((pair) => {
      const [first, second] = pair
        .map((str) => str.split("-"))
        .map((str) => str.map((num) => +num));
      return isWithin(first, second);
    })
    .filter((x) => x === true).length;

  const solution2 = pairs
    .map((pair) => {
      const [first, second] = pair
        .map((str) => str.split("-"))
        .map((str) => str.map((num) => +num));
      return overlaps(first, second);
    })
    .filter((x) => x === true).length;

  return [solution1, solution2];
};

export default solve;
