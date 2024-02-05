import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div>
			<Navbar />
			<main className="px-5 lg:px-24 py-5 min-h-[100vh] bg-[#121723] text-white ">
				<Outlet />
			</main>
		</div>
	);
}

export default RootLayout;
