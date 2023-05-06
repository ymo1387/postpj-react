import { axiosToken } from "axios-client";
import UserThread from "components/UserThread";
import { useEffect, useState } from "react";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [subers, setSubers] = useState([]);
	const [loading, setLoading] = useState(false);

	const search = (e) => {
		e.preventDefault();
		const searchKey = e.target.search.value;
		if (searchKey.trim().length === 0) {
			return;
		}

		setLoading(true);

		axiosToken
			.get(`/v1/users?s=${searchKey.trim()}`)
			.then((res) => {
				console.log(res);
				setUsers(res.data.users);
				setSubers(res.data.subers);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	return (
		<div>
			<form
				className="shadow-md p-3 m-3 flex justify-between"
				onSubmit={search}
			>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search user name"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-[10rem]"
					required
				/>
				<button
					type="submit"
					className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-no-drop"
				>
					Search
				</button>
			</form>
			<>
				{loading ? (
					<>Loading...</>
				) : (
					<>
						{users.length > 0 ? (
							<>
								{users.map((user) => (
									<UserThread
										key={user.id}
										user={user}
										sub={subers.includes(user.id)}
									/>
								))}
							</>
						) : (
							<>No users</>
						)}
					</>
				)}
			</>
		</div>
	);
}
