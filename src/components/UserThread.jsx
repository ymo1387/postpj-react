const { axiosToken } = require("axios-client");
const { useState } = require("react");

const UserThread = (props) => {
	const { user, sub } = props;
	const [disable, setDisable] = useState(false);
	const [isSub, setIsSub] = useState(sub);

	const subscribe = () => {
		setDisable(true);
		axiosToken
			.post(`/v1/users/${user.id}/subscribe`)
			.then((res) => {
				setIsSub(true);
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
				<h3>{user.name}</h3>
			</div>
			<div>
				{!isSub && (
					<button
						onClick={subscribe}
						className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-no-drop"
						disabled={disable}
					>
						Subscribe
					</button>
				)}
			</div>
		</div>
	);
};

export default UserThread;
