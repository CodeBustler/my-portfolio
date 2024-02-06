import React from "react";
import ab from "../assets/ab.mp4";
import srs from "../assets/srs.mp4";
import { MdWork } from "react-icons/md";

function PastWork() {
	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="past_work">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold  flex items-end gap-3">
				<MdWork className="text-gray-500 mb-1" />
				Past Work
				<span className="text-gray-500 text-2xl">Freelance</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				<div className="rounded-xl grid-rows-2 overflow-hidden">
					<video src={ab} autoPlay muted loop>
						BlinkMart E-Commerce| ReactJS web app Demo
					</video>
				</div>
				<div className="rounded-xl  overflow-hidden">
					<video src={srs} autoPlay muted loop>
						Epic News | ReactJS web app Demo
					</video>
				</div>
			</div>
		</div>
	);
}

export default PastWork;
