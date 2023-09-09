import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between py-6">
            <section className="grid items-center justify-center grid-flow-col">
                <Image
                    src="/dlogo.png"
                    width={40}
                    height={40}
                    alt="devstream logo"
                />
                <Link href="/" className="text-2xl font-semibold ">
                    devstream.
                </Link>
            </section>
            <section>
                <button>Subscribe</button>
            </section>
        </header>
    );
}
