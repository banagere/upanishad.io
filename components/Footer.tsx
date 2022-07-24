import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 text-neutral-500 mx-auto text-center font-semibold text-sm">
      <span className="hover:text-orange-400">
        <Link href="/notes">Release Notes</Link>
      </span>
      {" • "}
      <span className="hover:text-orange-400">
        <Link href="/about">About</Link>
      </span>
    </footer>
  );
}
