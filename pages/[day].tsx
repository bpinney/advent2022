import fs from "fs";
import { GetStaticPropsContext } from "next";
import day01 from "../days/1";
import day02 from "../days/2";
import Solutions from "../components/Solutions";
import Nav from "../components/nav";

type SelectionProps = {
  day: string;
  solutions: number[];
};

const Day = (props: SelectionProps) => {
  const { day, solutions } = props;

  return (
    <>
      <Nav />
      <Solutions day={day} solutions={solutions} />
    </>
  );
};

export function getStaticPaths() {
  // TODO: generate this based on existing folders
  return {
    fallback: true,
    paths: [
      {
        params: {
          day: "1",
        },
      },
      {
        params: {
          day: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // TODO: Correctly validate and handle routing errors
  const day = context.params?.day || 1;
  const path = `days/${day}`;
  const input = fs.readFileSync(`${path}/input.txt`, "utf-8");

  // TODO: See if there is a way to lazily/dynamically import these
  const logic: { [key: string]: (input: string) => number[] } = {
    "1": day01,
    "2": day02,
  };

  const solutions = logic[day as string](input);

  return { props: { input, day, path, solutions }, revalidate: 10 };
}

export default Day;
