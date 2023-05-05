import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

export default function GuestLayout() {
	const token = Cookies.get("access_token");
	if (token) {
		return <Navigate to="/" />;
	}
	return <Outlet />;
}
