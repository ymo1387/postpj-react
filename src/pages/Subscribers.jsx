import { axiosToken } from "axios-client";
import { useEffect, useState } from "react";

const SuberThread = ({ sub, toSuber, setToSuber }) => {
	const [disable, setDisable] = useState(false);

	const unsubscribe = () => {
		setDisable(true);
		axiosToken
			.post(`/v1/users/${sub.id}/unsubscribe`)
			.then((res) => {
				setToSuber(toSuber.filter((old) => old.id !== sub.id));
				setDisable(false);
			})
			.catch((err) => {
				console.log(err);
				setDisable(false);
			});
	};

	return (
		<div className="shadow-md p-3 m-3 flex justify-between">
			<div>
				<h3>{sub.name}</h3>
			</div>
			<div>
				<button
					onClick={unsubscribe}
					className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-no-drop"
					disabled={disable}
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
								<SuberThread
									key={sub.id}
									sub={sub}
									toSuber={toSuber}
									setToSuber={setToSuber}
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
