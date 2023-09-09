import Footer from "@/components/Footer";
import HeadComponent from "@/components/Head";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
    subsets: ["devanagari"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <HeadComponent />
            <body className="px-10" style={poppins.style}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
