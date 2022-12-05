import Link from "next/link";

// TODO: dynamically generate list based on existing inputs or current day

const Nav = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/1">1</Link>
          </li>
          <li>
            <Link href="/2">2</Link>
          </li>
          <li>
            <Link href="/3">3</Link>
          </li>
          <li>
            <Link href="/4">4</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
