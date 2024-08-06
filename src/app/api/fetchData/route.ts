// eco_leap/src/app/api/fetchData/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { changeType } = await req.json();

		const urlChange = {
			model: "vehicle_estimate_by_model",
			type: "vehicle_estimate_by_type",
		};

		const distances = {
			distance: "10",
			units: "mi",
		};

		const vehicleModel = {
			make: ["vehicle_make", "Ford"],
			model: ["vehicle_model", "Aerostar Wagon"],
		};

		const vehicleType = {
			type: ["vehicle_type", "Bus-Coach"],
			fuel: ["fuel_type", "Petrol"],
		};

		const url: string = `https://carbonsutra1.p.rapidapi.com/${
			changeType === "car"
				? urlChange.model
				: changeType === "coach"
					? urlChange.type
					: urlChange.model
		}`;

		const data: FormData = new FormData();
		if (changeType === "car") {
			data.append(vehicleModel.make[0], vehicleModel.make[1]);
			data.append(vehicleModel.model[0], vehicleModel.model[1]);
		} else if (changeType === "coach") {
			data.append(vehicleType.type[0], vehicleType.type[1]);
			data.append(vehicleType.fuel[0], vehicleType.fuel[1]);
		}
		data.append("distance_value", distances.distance);
		data.append("distance_unit", distances.units);

		const apiKey = process.env.X_RAPIDAPI_KEY;
		const apiHost = process.env.X_RAPIDAPI_HOST;
		const authorization = process.env.AUTHORIZATION;

		if (!apiKey || !apiHost || !authorization) {
			throw new Error("Missing required environment variables");
		}

		const options = {
			method: "POST",
			headers: {
				"x-rapidapi-key": apiKey,
				"x-rapidapi-host": apiHost,
				Authorization: authorization,
			},
			body: data,
		};

		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`Bob status: ${response.status}`);
		}
		const result = await response.json();
		return NextResponse.json(result.data);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
		return NextResponse.json(
			{ error: "Unknown error occurred" },
			{ status: 500 },
		);
	}
}
