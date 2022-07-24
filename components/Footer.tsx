import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mx-auto">
      <hr className="w-56 mx-auto border-bronze-300 border-1" />
      <div className="text-center font-semibold text-sm text-gray-500 pt-3">
        <span className="hover:text-bronze-500">
          <Link href="/notes">Release Notes</Link>
        </span>
        {" • "}
        <span className="hover:text-bronze-500">
          <Link href="/about">About</Link>
        </span>
      </div>
    </footer>
  );
}
