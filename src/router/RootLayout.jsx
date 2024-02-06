import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import TapToTop from "../components/TapToTop";
import SideBar from "../components/SideBar";

function RootLayout() {
	return (
		<div>
			<Navbar />
			<SideBar />
			<main className="px-5 lg:px-24 py-5 min-h-[100vh] bg-[#121723] text-white ">
				<Outlet />
			</main>
			<TapToTop />
		</div>
	);
}

export default RootLayout;
