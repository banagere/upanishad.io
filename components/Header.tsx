import Link from "next/link";

export default function Header() {
  return (
    <header className="font-extrabold text-3xl max-w-3xl mx-auto hover:text-neutral-700 py-5 text-center">
        <Link href="/" passHref>
          Upanishad
        </Link>
    </header>
  );
}
