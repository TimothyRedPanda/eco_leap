import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Eco Leap",
	description:
		"A travel carbon emissions calculator, to help you reduce your enviornmental impact.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`w-screen h-screen text-center overflow-hidden ${inter.className}`}>
				<NavBar />

				<main className="overflow-scroll">{children}</main>

				<Footer />

				</body>
		</html>
	);
}
