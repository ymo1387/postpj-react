import { axiosToken } from "axios-client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const LogoutBtn = () => {
	const navigate = useNavigate();
	const logout = () => {
		axiosToken
			.post("v1/auth/logout")
			.then((res) => {
				Cookies.remove("access_token");
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<button
				onClick={logout}
				className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
			>
				Logout
			</button>
		</div>
	);
};
export default LogoutBtn;
