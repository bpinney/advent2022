export const solve = (input: string) => {
  const sumArray = (array: number[]) =>
    array.reduce((acc, val) => acc + val, 0);
  const returnLargest = (array: number[]) =>
    array.reduce((acc, val) => (acc > val ? acc : val), 0);
  const returnTopThree = (array: number[]) =>
    array.sort((a, b) => b - a).slice(0, 3);

  const inputArray = input.split("\n\n");
  const elves = inputArray.map((elf) => {
    const pack = elf.split("\n");
    return pack.map((item) => {
      return +item;
    });
  });

  const solution1 = returnLargest(
    elves.map((element) => {
      return sumArray(element);
    })
  );

  const solution2 = sumArray(
    returnTopThree(
      elves.map((element) => {
        return sumArray(element);
      })
    )
  );
  return [solution1, solution2];
};
export default solve;
