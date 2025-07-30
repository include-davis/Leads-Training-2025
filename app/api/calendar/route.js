import { getToken } from "next-auth/jwt";

export async function GET(req) {

	const token = await getToken({ req });
	if (!token || !token.access_token) {
		return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });
	}

	const timeMin = "2025-01-01T00:00:00Z";
	const timeMax = "2025-12-31T23:59:59Z";

	const url = new URL("https://www.googleapis.com/calendar/v3/calendars/primary/events");
	url.searchParams.append("timeMin", timeMin);
	url.searchParams.append("timeMax", timeMax);
	url.searchParams.append("singleEvents", "true");
	url.searchParams.append("orderBy", "startTime");

	const res = await fetch(url.toString(), {
		headers: {
		Authorization: `Bearer ${token.access_token}`,
		},
	});

	const data = await res.json();
	return new Response(JSON.stringify(data));
}
