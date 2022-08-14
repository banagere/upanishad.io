import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mx-auto">
      <hr className="w-56 mx-auto border-bronze-300 border-1" />
      <div className="pt-3 text-sm font-semibold text-center text-gray-500">
        <Link href="/about">
          <a className="tracking-widest uppercase hover:text-bronze-500">About</a>
        </Link>
      </div>
    </footer>
  );
}
