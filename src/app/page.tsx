"use client";
import { fetchData } from "../../utils/api";

export default function Home() {
	const handleClick = async () => {
		const changeType = "car"; // or "coach", depending on your use case
		await fetchData(changeType);
	};

	return (
		<button type="button" onClick={handleClick}>
			Fetch Data
		</button>
	)
}
