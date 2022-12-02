import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
export default function Day0x() {
  const router = useRouter();
  const day = router.query.day;
  return (
    <Fragment>
      <div>
        <ul>
          <li>
            <Link href="/1">1</Link>
          </li>
          <li>
            <Link href="/2">2</Link>
          </li>
        </ul>
      </div>
      <div>Day {day}</div>
    </Fragment>
  );
}
