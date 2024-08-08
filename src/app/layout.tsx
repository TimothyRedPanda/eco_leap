import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

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
			<head><link rel="stylesheet" href="https://use.typekit.net/kob3rhg.css"></link></head>
			<body
				className="w-screen h-screen text-center overflow-hidden"
			>
				<NavBar />

				<main className="overflow-scroll">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
