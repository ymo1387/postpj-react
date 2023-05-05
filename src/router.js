import { createBrowserRouter } from "react-router-dom";
import App from "App";
import AuthLayout from "layouts/AuthLayout";
import GuestLayout from "layouts/GuestLayout";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

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
