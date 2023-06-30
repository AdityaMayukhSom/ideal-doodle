import Image from "next/image";
import Link from "next/link";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Header() {
  return (
    <header className="p-8 text-center rounded-md bg-slate-800 ">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        className="mx-auto"
        alt={"logo"}
      />
      <Link href="/">
        <h1
          className="mt-4 mb-2 text-3xl font-bold text-white "
          style={spaceMono.style}
        >
          devstream.
        </h1>
      </Link>
      <p className="text-slate-300 ">
        Stay ahead in tech with our enlightening blog posts.
      </p>
    </header>
  );
}
