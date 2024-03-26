import Link from "next/link";
import { useRouter } from "next/router";
import Setting from "./setting/setting";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/setting">Setting</Link>
      </li>
    </ul>
  );
};