import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
	return (
		<nav className="bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8 sticky top-0 z-50">
			<div className="flex gap-5">
				<Link
					to="/"
					className="text-white scale-110  cursor-pointer  py-5"
				>
					Home
				</Link>
				<NavLink to="/projects" className="cursor-pointer py-5">
					Projects
				</NavLink>

				<NavLink to="/about_me" className="cursor-pointer py-5">
					About Me
				</NavLink>
			</div>
			<NavLink
				to="hire_me"
				className="flex items-center gap-2 cursor-pointer py-5"
			>
				Hire Me <FaArrowRightLong />
			</NavLink>
		</nav>
	);
}

export default Navbar;
