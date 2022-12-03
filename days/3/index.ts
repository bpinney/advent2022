const prioritize = (char: string) => {
  const num = char.charCodeAt(0);
  return num > 90 ? num - 96 : num - 38;
};

const sackHalves = (sack: string) => {
  const len = sack.length;
  const compartment1 = sack.slice(0, len / 2);
  const compartment2 = sack.slice(len / 2, len);
  return [compartment1, compartment2];
};

const solve = (input: string) => {
  const inputArray = input.split("\n");

  const solution1 = inputArray.reduce((total, sack) => {
    const [compartment1, compartment2] = sackHalves(sack);
    let checked = "";
    return (
      total +
      compartment1.split("").reduce((acc, val) => {
        const newAcc =
          compartment2.includes(val) && !checked.includes(val)
            ? acc + prioritize(val)
            : acc;
        if (compartment2.includes(val) && !checked.includes(val))
          checked = checked + val;
        return newAcc;
      }, 0)
    );
  }, 0);

  const initial: string[][] = [];

  const solution2 = inputArray
    .reduce((acc, val, idx) => {
      const group = Math.floor(idx / 3);
      if (acc[group] === undefined) {
        acc[group] = [val];
      } else acc[group].push(val);
      return acc;
    }, initial)
    .reduce((solution2, grp) => {
      let checked = "";

      return (
        solution2 +
        grp[0].split("").reduce((acc, val) => {
          if (
            grp[1].includes(val) &&
            grp[2].includes(val) &&
            !checked.includes(val)
          ) {
            checked = checked + val;
            return acc + prioritize(val);
          }
          return acc;
        }, 0)
      );
    }, 0);

  return [solution1, solution2];
};

export default solve;
