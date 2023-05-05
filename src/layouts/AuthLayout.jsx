import NavBar from "components/NavBar";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
	const token = Cookies.get("access_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return (
		<div className="min-h-screen bg-gray-100">
			<NavBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
