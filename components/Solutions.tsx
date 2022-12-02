type SolutionsProps = { day: string; solutions: number[] };

const Solutions = (props: SolutionsProps) => {
  const { day, solutions } = props;
  const [solution1, solution2] = solutions;

  return (
    <>
      <div>Day {day}</div>
      <div>Solution 1: {solution1}</div>
      <div>Solution 2: {solution2}</div>
    </>
  );
};

export default Solutions;
