import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-5 text-neutral-500 max-w-3xl mx-auto text-center">
      <Link href="/notes">Release Notes</Link>
      {" • "}
      <Link href="/about">About</Link>
    </footer>
  );
}
