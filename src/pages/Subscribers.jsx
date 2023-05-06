import { axiosToken } from "axios-client";
import UserThread from "components/UserThread";
import { useEffect, useState } from "react";

export default function Subscribers() {
	const [toSuber, setToSuber] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			try {
				const user = await axiosToken.get("/v1/user");

				const subscriber = await axiosToken.get(
					`/v1/users/${user.data.id}/subscribing-list`
				);
				setToSuber(subscriber.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		}

		fetchData();
	}, []);
	return (
		<>
			{loading ? (
				<>Loading...</>
			) : (
				<>
					{toSuber.length > 0 ? (
						<>
							{toSuber.map((sub) => (
								<UserThread
									key={sub.id}
									user={sub}
									sub={true}
								/>
							))}
						</>
					) : (
						<>No subscribers</>
					)}
				</>
			)}
		</>
	);
}
