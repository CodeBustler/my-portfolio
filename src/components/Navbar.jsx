import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
	return (
		<nav className="bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8">
			<div className="flex gap-5">
				<Link
					to="/"
					className="text-white scale-110  cursor-pointer  py-5"
				>
					Home
				</Link>
				<NavLink to="/projects" className="cursor-pointer py-5">
					Past Work
				</NavLink>
				<NavLink to="/skills" className="cursor-pointer py-5">
					Skills
				</NavLink>
				<NavLink to="/testimonials" className="cursor-pointer py-5">
					Testimonials
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
