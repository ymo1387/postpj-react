import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import GuestLayout from "layouts/GuestLayout";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Home from "pages/Home";
import MyPosts from "pages/MyPosts";
import PostCreate from "pages/PostCreate";
import Subscribers from "pages/Subscribers";
import Users from "pages/Users";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to="/home" />
			},
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/myposts",
				element: <MyPosts />
			},
			{
				path: "/post/create",
				element: <PostCreate />
			},
			{
				path: "/user/subscribers",
				element: <Subscribers />
			},
			{
				path: "/users",
				element: <Users />
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
