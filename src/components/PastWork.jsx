import React from "react";
import ab from "../assets/ab.mp4";
import srs from "../assets/srs.mp4";

function PastWork() {
	return (
		<div className="container mx-auto mt-28  min-h-[80vh]">
			<h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
				Past Work{" "}
				<span className="opacity-25 text-2xl">&nbsp; Freelance</span>
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
