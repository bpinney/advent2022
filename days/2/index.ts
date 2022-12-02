const solve = (input: string) => {
  const sumArray = (array: number[]) =>
    array.reduce((acc, val) => acc + val, 0);

  const determineOutcome = (i: number[]) => {
    const outcome = i[1] - i[0];
    if (outcome === 0) return 3;
    if (outcome < 0) {
      if (outcome == -2) {
        return 6;
      }
      return 0;
    }

    if (outcome == 1) return 6;

    return 0;
  };
  const inputArray = input
    .split("\n")
    .map((element) => element.split(" "))
    .map((element) => {
      const jsonObject: { [key: string]: number } = {
        A: 1,
        X: 1,
        B: 2,
        Y: 2,
        C: 3,
        Z: 3,
      };
      return element.map((inner) => jsonObject[inner]);
    });

  const points = inputArray.map((element) => {
    const bonusPoint = element[1];
    return determineOutcome(element) + bonusPoint;
  });

  const determinedInputs = inputArray.map((element) => {
    const outcome = element[1];

    let determination = element[0];
    if (outcome === 1) {
      determination -= 1;
    }

    if (outcome === 3) {
      determination += 1;
    }

    if (determination < 1) determination += 3;
    if (determination > 3) determination -= 3;

    return [element[0], determination];
  });

  const determinedPoints = determinedInputs.map((element) => {
    const bonusPoint = element[1];
    return determineOutcome(element) + bonusPoint;
  });

  const solution1 = sumArray(points);
  const solution2 = sumArray(determinedPoints);

  return [solution1, solution2];
};
export default solve;
