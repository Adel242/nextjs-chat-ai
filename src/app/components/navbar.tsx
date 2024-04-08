import Link from "next/link";

export default function Navbar() {
  return (
    <ul className=" flex flex-row justify-between">
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};