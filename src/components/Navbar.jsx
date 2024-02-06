import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniHome } from "react-icons/hi2";

function Navbar() {
	const [activeLink, setActiveLink] = useState("");
	const [toggleSideBar, setToggleSideBar] = useState(false);

	const navLinks = [
		{ linkTitle: "projects", link: "#projects" },
		{ linkTitle: "past work", link: "#past_work" },
		{ linkTitle: "skills", link: "#skills" },
		{ linkTitle: "testimonials", link: "#testimonials" },
	];
	const home = () => {
		window.scrollTo(0, 0);
		setActiveLink("home");
	};
	return (
		<nav className=" bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8 sticky top-0 z-50">
			<div className="flex md:hidden items-center gap-4">
				<RxHamburgerMenu className="text-3xl" />
			</div>

			{/*NAV_LINKS*/}
			<div className="hidden md:flex items-center gap-5 ">
				<Link
					to="/"
					onClick={home}
					className="text-white scale-110  cursor-pointer  py-5"
				>
					Home
				</Link>
				{navLinks.map((links, index) => (
					<a
						key={index}
						href={links.link}
						className="capitalize py-5"
					>
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
