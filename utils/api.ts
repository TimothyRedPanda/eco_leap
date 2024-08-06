export async function fetchData(changeType: string) {
	try {
		const response = await fetch("/api/fetchData/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ changeType }),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();
		console.table(result);
	} catch (error) {
		console.error(error);
	}
}
