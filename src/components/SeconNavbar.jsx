import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// ASSETS
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniHome } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

//----------------------------------------------------
// ************ NAVBAR FOR OUTER ROUTES **************
//----------------------------------------------------
function SeconNavbar() {
	useEffect(() => window.scrollTo(0, 0), []);

	//----------------------------------------------------
	return (
		<nav className="relative bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between px-4 sticky top-0 z-50 ">
			<div className="flex items-center gap-6  ">
				<Link
					to="/"
					className="text-white cursor-pointer  py-5 flex items-center"
				>
					<HiHome className=" hover:text-yellow-400 w-10 text-2xl relative -top-1" />
					Home
				</Link>
			</div>
		</nav>
	);
}

export default SeconNavbar;
