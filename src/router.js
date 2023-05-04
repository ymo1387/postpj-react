import { createBrowserRouter } from "react-router-dom";
import App from "App";
import AuthLayout from "layouts/AuthLayout";
import GuestLayout from "layouts/GuestLayout";
import Login from "components/auth/Login";
import Register from "components/auth/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "/",
				element: <App />
			}
		]
	},
	{
		path: "/",
		element: <GuestLayout />,
		children: [
			{
				path: "login",
				element: <Login />
			},
			{
				path: "register",
				element: <Register />
			}
		]
	},
]);

export default router;
