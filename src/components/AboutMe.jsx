import React from "react";
import { FaUser } from "react-icons/fa";
import SeconNavbar from "./SeconNavbar";

function AboutMe() {
	return (
		<>
			<SeconNavbar />
			<div
				className="container mx-auto px-5 lg:px-24 py-5 min-h-[100vh] pt-10 md:pt-20 "
				id="hire_me"
			>
				<div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
					<FaUser className="text-gray-500 mb-1" />
					About Me
				</div>
			</div>
		</>
	);
}

export default AboutMe;
