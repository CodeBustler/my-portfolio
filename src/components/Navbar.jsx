import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// ASSETS
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniHome } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
//----------------------------------------------------

function Navbar({ toggleSideBar, setToggleSideBar }) {
	const [activeLink, setActiveLink] = useState("home");

	//----------------------------------------------------
	// FOT MAP & STYLING UNDERLINE FOR ACTIVE LINK
	const navLinks = [
		{ linkTitle: "projects", link: "#projects" },
		{ linkTitle: "Work Experience", link: "#work" },
		{ linkTitle: "skills", link: "#skills" },
		{ linkTitle: "testimonials", link: "#testimonials" },
	];

	//----------------------------------------------.------
	// TOGGLE SIDEBAR (MOBILE)
	const tSideBar = () => {
		setToggleSideBar(!toggleSideBar);
	};

	//----------------------------------------------------
	// SCROLLTOP
	const home = () => {
		window.scrollTo(0, 0);
		setActiveLink("home");
	};
	//----------------------------------------------------
	return (
		<nav className="relative bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-8 sticky top-0 z-50 ">
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
			{/*----------------------------------------------*/}
			{/************** SIDEBAR NAV_LINKS ***************/}
			{/*----------------------------------------------*/}
			{toggleSideBar ? (
				<div className=" md:hidden absolute top-16 left-0 p-5 pt-1 pr-8 bg-[#1D2430] rounded-br-2xl shadow-2xl border border-l-0 border-t-0 border-2 border-gray-500">
					<div className=" md:hidden flex flex-col items-start  ">
						<Link
							to="/"
							className="capitalize py-3 pl-4 w-[100%] flex items-center gap-3 border border-gray-600 border-l-0 border-t-0 border-r-0 border-l-0 mb-3 "
							onClick={() => {
								tSideBar();
								window.scrollTo(0, 0);
							}}
						>
							<HiMiniHome className="text-xl mb-1" />
							Home
						</Link>
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
							to="/all_projects"
							className="capitalize py-3 pl-4 w-[100%] flex items-center gap-3"
							onClick={tSideBar}
						>
							All Projects
						</Link>
						<Link
							to="/about_me"
							className="capitalize py-3 pl-4 w-[100%] border border-gray-600 border-l-0 border-b-0 border-r-0 border-l-0 mt-3 flex items-center gap-3"
							onClick={tSideBar}
						>
							<FaUser className="text-lg mb-1" />
							About Me
						</Link>
					</div>
				</div>
			) : (
				""
			)}
			{/*----------------------------------------------*/}
			{/****************** NAV_LINKS ******************/}
			{/*----------------------------------------------*/}
			<div className="hidden md:flex items-center gap-5  ">
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
						onClick={() => setActiveLink(links.link)}
						className={`${
							activeLink == links.link
								? "underline underline-offset-8 decoration-yellow-400"
								: ""
						} capitalize py-5 transition`}
					>
						{links.linkTitle}
					</a>
				))}
				<Link to="/all_projects" className=" cursor-pointer  py-5">
					All Projects
				</Link>
			</div>
			<a
				href="#hire_me"
				className={`capitalize flex items-center gap-3 py-5 ${
					activeLink == "#hire_me"
						? "underline underline-offset-8 decoration-yellow-400"
						: ""
				} `}
				onClick={() => setActiveLink("#hire_me")}
			>
				hire me <FaArrowRightLong className="rotate-180 text-2xl" />
			</a>
		</nav>
	);
}

export default Navbar;
