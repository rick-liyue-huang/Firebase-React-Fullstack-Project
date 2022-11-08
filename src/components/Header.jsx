import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
	const location = useLocation();
	// console.log("location: ---", location.pathname);
	const navigate = useNavigate();

	function pathMathRoute(route) {
		if (route === location.pathname) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div className="bg-white border-b shadow-sm sticky top-0 z-20">
			<header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
				<div>
					<img
						src="logo512.png"
						alt="logo"
						className="h-5 cursor-pointer"
						onClick={() => navigate("/")}
					/>
				</div>
				<div>
					<ul className="flex space-x-10">
						<li
							className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
								pathMathRoute("/") && "text-black border-b-red-300"
							}`}
							onClick={() => navigate("/")}
						>
							Home
						</li>
						<li
							className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
								pathMathRoute("/offers") && "text-black border-b-red-300"
							}`}
							onClick={() => navigate("/offers")}
						>
							Offers
						</li>
						<li
							className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
								pathMathRoute("/signin") && "text-black border-b-red-300"
							}`}
							onClick={() => navigate("signin")}
						>
							Sign In
						</li>
					</ul>
				</div>
			</header>
		</div>
	);
};
