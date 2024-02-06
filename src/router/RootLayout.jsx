import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import TapToTop from "../components/TapToTop";

function RootLayout() {
	const [toggleSideBar, setToggleSideBar] = useState(false);

	return (
		<div>
			<Navbar
				toggleSideBar={toggleSideBar}
				setToggleSideBar={setToggleSideBar}
			/>
			<main
				className={`px-5 lg:px-24 py-5 min-h-[100vh] bg-[#121723] text-white  ${
					toggleSideBar ? "blur-lg transition " : ""
				} `}
				onClick={() => setToggleSideBar(false)}
			>
				<Outlet />
			</main>
			<TapToTop />
		</div>
	);
}

export default RootLayout;
