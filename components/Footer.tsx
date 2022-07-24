import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 text-gray-500 mx-auto text-center font-semibold text-sm">
      <span className="hover:text-bronze-500">
        <Link href="/notes">Release Notes</Link>
      </span>
      {" • "}
      <span className="hover:text-bronze-500">
        <Link href="/about">About</Link>
      </span>
    </footer>
  );
}
