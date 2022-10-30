import Link from "next/link";

export default function Banner() {
  return (
    <header className="mx-auto py-7 text-center">
      <span className="hover:text-bronze-400 font-extrabold text-3xl ">
        <Link href="/" passHref>
          Upanishad
        </Link>
      </span>
    </header>
  );
}
