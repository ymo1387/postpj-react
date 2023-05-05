import { axiosToken } from "axios-client";
import { useEffect, useState } from "react";

const SuberThread = ({ sub }) => {
	const unsubscribe = () => {};

	return (
		<div className="shadow-md p-3 m-3 flex justify-between">
			<div>
				<h3>{sub.name}</h3>
			</div>
			<div>
				<button
					onClick={unsubscribe}
					className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
				>
					Unsubscribe
				</button>
			</div>
		</div>
	);
};

export default function Subscribers() {
	const [toSuber, setToSuber] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			try {
				const user = await axiosToken.get("/v1/user");

				const subscriber = await axiosToken.get(
					`/v1/users/${user.data.id}/subscriber-list`
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
					{toSuber.map((sub) => (
						<SuberThread key={sub.id} sub={sub} />
					))}
				</>
			)}
		</>
	);
}
