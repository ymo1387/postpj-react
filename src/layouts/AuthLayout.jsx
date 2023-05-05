import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
	const token = Cookies.get("access_token");
	if (token === undefined) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}
