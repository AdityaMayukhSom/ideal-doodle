import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3 mt-12 text-center border-t border-slate-300 text-slate-500">
      <h3>
        Created With ❤️ By&nbsp;
        <Link
          href="https://www.github.com/AdityaMayukhSom"
          aria-label="github account of Aditya Mayukh Som"
        >
          Aditya Mayukh Som
        </Link>
      </h3>
    </footer>
  );
}
