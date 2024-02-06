import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniHome } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiBars3CenterLeft } from "react-icons/hi2";

function Navbar({ toggleSideBar, setToggleSideBar }) {
	const [activeLink, setActiveLink] = useState("");

	const navLinks = [
		{ linkTitle: "projects", link: "#projects" },
		{ linkTitle: "past work", link: "#past_work" },
		{ linkTitle: "skills", link: "#skills" },
		{ linkTitle: "testimonials", link: "#testimonials" },
	];

	const tSideBar = () => {
		setToggleSideBar(!toggleSideBar);
	};

	const home = () => {
		window.scrollTo(0, 0);
		setActiveLink("home");
	};

	return (
		<nav className="relative bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8 sticky top-0 z-50">
			<div
				className="flex md:hidden items-center gap-4 cursor-pointer"
				onClick={tSideBar}
			>
				{toggleSideBar ? (
					<HiBars3CenterLeft className="text-4xl text-red-400" />
				) : (
					<RxHamburgerMenu className="text-3xl" />
				)}
			</div>
			{toggleSideBar ? (
				<div className=" md:hidden absolute top-16 left-0 p-5 bg-[#1D2430] rounded-br-md shadow-2xl border border-l-0 border-t-0 border-2 border-gray-500">
					<div className=" md:hidden flex flex-col items-start  ">
						{navLinks.map((links, index) => (
							<a
								key={index}
								href={links.link}
								className="capitalize py-3 pl-4 w-[100%]"
								onClick={tSideBar}
							>
								{links.linkTitle}
							</a>
						))}
						<Link
							to="/about_me"
							className="capitalize py-3 pl-4 w-[100%]"
							onClick={tSideBar}
						>
							About Me
						</Link>
					</div>
				</div>
			) : (
				""
			)}
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
