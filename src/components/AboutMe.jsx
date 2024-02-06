import React from "react";
import { FaUser } from "react-icons/fa";

function AboutMe() {
	return (
		<div className="container mx-auto pt-10 min-h-[100vh]" id="hire_me">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
				<FaUser className="text-gray-500 mb-1" />
				About Me
			</h1>
		</div>
	);
}

export default AboutMe;
