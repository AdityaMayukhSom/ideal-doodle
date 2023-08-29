import Footer from "@/components/Footer";
import HeadComponent from "@/components/Head";
import Header from "@/components/Header"
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HeadComponent />
      <body className="max-w-3xl px-6 pt-6 mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
