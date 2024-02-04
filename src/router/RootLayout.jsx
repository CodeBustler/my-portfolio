import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<div>
			<h1 className="bg-black text-white">Navbar</h1>
			<main className="p-5 min-h-[90vh]">
				<Outlet />
			</main>
			<h1>Footer</h1>
		</div>
	);
}

export default RootLayout;
