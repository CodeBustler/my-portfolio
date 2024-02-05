import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div>
			<Navbar />
			<main className="px-5 lg:px-16 py-5 min-h-[85vh] bg-[#121723] text-white grid place-items-center">
				<Outlet />
			</main>
			<h1>Footer</h1>
		</div>
	);
}

export default RootLayout;
