import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="w-full h-30 flex flex-row gap-4 p-3 items-center shadow-navShadow">
			<Image
				src="eco_leap_bob.svg"
				alt="Eco Leap Logo"
				width={42}
				height={42}
				priority={true}
			/>
			<h1 className="font-bold text-xl">EcoLeap</h1>
		</nav>
	);
}
