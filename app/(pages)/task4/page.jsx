"use client";

import styles from "./page.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function CalendarPage() {
	const { data: session } = useSession();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		if (session) {
		fetch("/api/calendar")
			.then(res => res.json())
			.then(data => {
			if (data.items) setEvents(data.items);
			});
		}
	}, [session]);

	if (!session) {
		return (
		<div className={styles.container}>
			<button onClick={() => signIn("google")}>Sign in with Google</button>
		</div>
		);
	}

	  return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2>Your 2025 Events</h2>
				<button className={styles.signOutButton} onClick={() => signOut()}>
				Sign Out
				</button>
			</div>
			
			<ul>
				{events.map(event => (
				<li key={event.id}>
					<strong>{event.summary}</strong><br />
					{event.start?.dateTime || event.start?.date}
				</li>
				))}
			</ul>
		</div>
	);
}
