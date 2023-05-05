import { NavLink } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

const NavItem = ({ path, text }) => {
	return (
		<NavLink
			to={path}
			className={({ isActive, isPending }) =>
				isPending
					? "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
					: isActive
					? "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-indigo-400 text-gray-900 focus:border-indigo-700"
					: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
			}
		>
			{text}
		</NavLink>
	);
};

const NavBar = () => {
	return (
		<nav className="bg-white border-b border-gray-100">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
							<NavItem path="/home" text="Home" />
						</div>
					</div>
					<div className="flex">
						<div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
							<div className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none border-transparent">
								<LogoutBtn />
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
