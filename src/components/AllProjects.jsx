import React from "react";
import { MdDashboard } from "react-icons/md";

function AllProjects() {
	return (
		<div className="container mx-auto pt-10 min-h-[100vh]" id="hire_me">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
				<MdDashboard className="text-gray-500 mb-1" />
				AllProjects
			</h1>
		</div>
	);
}

export default AllProjects;
