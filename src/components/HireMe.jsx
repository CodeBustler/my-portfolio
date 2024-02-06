import React from "react";
import { RiMegaphoneFill } from "react-icons/ri";

function HireMe() {
	return (
		<div className="container mx-auto pt-28 min-h-[100vh]" id="hire_me">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
				<RiMegaphoneFill className="text-gray-500 mb-1" />
				Hire Me
			</h1>
		</div>
	);
}

export default HireMe;
