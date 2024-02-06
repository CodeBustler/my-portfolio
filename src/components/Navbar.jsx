import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
	const [activeLink, setActiveLink] = useState("");

	const navLinks = [
		{ linkTitle: "projects", link: "#projects" },
		{ linkTitle: "past work", link: "#past_work" },
		{ linkTitle: "skills", link: "#skills" },
		{ linkTitle: "testimonials", link: "#testimonials" },
	];

	return (
		<nav className="bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8 sticky top-0 z-50">
			{/*NAV_LINKS*/}
			<div className="flex items-center gap-5">
				<Link
					to="/"
					onClick={() => {
						window.scrollTo(0, 0);
						setActiveLink("home");
					}}
					className="text-white scale-110  cursor-pointer  py-5"
				>
					Home
				</Link>
				{navLinks.map((links) => (
					<a href={links.link} className="capitalize py-5">
						{links.linkTitle}
					</a>
				))}
			</div>
			<a
				href="#hire_me"
				className="capitalize flex items-center gap-3 py-5"
			>
				hire me <FaArrowRightLong className="rotate-180 text-2xl" />
			</a>
		</nav>
	);
}

export default Navbar;
