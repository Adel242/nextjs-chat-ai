import Link from "next/link";

export default function Navbar() {
  return (
    <ul className=" ">
      <li className="pt-2 border-b">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};