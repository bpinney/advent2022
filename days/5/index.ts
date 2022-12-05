type CrateMatrix = {
  [key: string]: string[];
};

const processInstruction = (
  instruction: string[],
  crateMatrix: CrateMatrix,
  craneModel: string = "9000"
) => {
  const movement = [];
  for (let x = 0; x < +instruction[0]; x++) {
    const popped = crateMatrix[instruction[1]].pop();
    if (popped != undefined) {
      movement.push(popped);
    }
  }
  if (craneModel === "9001") movement.reverse();
  movement.forEach((popped) => crateMatrix[instruction[2]].push(popped));
};

const solve = (input: string) => {
  const inputArray = input.split("\n");

  const instructions = inputArray
    .filter((line) => line.startsWith("move "))
    .map((instruction) =>
      instruction
        .split(" ")
        .filter((line) => line.match(new RegExp(/[0-9]+/gm)))
    );

  const crateMatrix = inputArray
    .filter((line) => !line.startsWith("move "))
    .reduce(
      (
        acc: {
          [key: string]: string[];
        },
        val: string
      ) => {
        const len = val.length;
        let n = 1;
        for (let x = 1; x < len; x += 4) {
          if (acc[`${n}`] === undefined) acc[`${n}`] = [];
          const char = val.substring(x, x + 1).trim();
          if (char.length) acc[`${n}`].unshift(char);
          n++;
        }

        return acc;
      },
      {}
    );

  const crateMatrix1: CrateMatrix = JSON.parse(JSON.stringify(crateMatrix));
  const crateMatrix2: CrateMatrix = JSON.parse(JSON.stringify(crateMatrix));

  instructions.forEach((instruction) =>
    processInstruction(instruction, crateMatrix1)
  );

  const solution1 = Object.values(crateMatrix1)
    .map((column) => column.pop())
    .join("");

  instructions.forEach((instruction) =>
    processInstruction(instruction, crateMatrix2, "9001")
  );

  const solution2 = Object.values(crateMatrix2)
    .map((column) => column.pop())
    .join("");

  const answer1 = "BWNCQRMDB";
  const answer2 = "NHWZCBNBF";

  if (solution1 !== answer1 || solution2 !== answer2) {
    throw new Error("Answers incorrect");
  }
  return [solution1, solution2];
};

export default solve;
