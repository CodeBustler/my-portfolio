import React from "react";
import { Link } from "react-router-dom";
import bm from "../assets/bm.mp4";
import epic from "../assets/epic.mp4";
import imageSearchEngine from "../assets/imageSearchEngine.mp4";
import infinityImageSlider from "../assets/infinityImageSlider.mp4";
import tribute from "../assets/tribute.mp4";

function Projects() {
	return (
		<div className="container mx-auto mt-28  min-h-[80vh]">
			<h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
				Projects
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				<div className="rounded-xl grid-rows-2 overflow-hidden">
					<video src={bm} autoPlay muted loop>
						BlinkMart E-Commerce| ReactJS web app Demo
					</video>
				</div>
				<div className="rounded-xl  overflow-hidden">
					<video src={epic} autoPlay muted loop>
						Epic News | ReactJS web app Demo
					</video>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				<div className="rounded-xl  overflow-hidden">
					<video src={imageSearchEngine} autoPlay muted loop>
						Image Search Engine | ReactJS web app Demo
					</video>
				</div>

				<div className="rounded-xl  overflow-hidden">
					<video src={tribute} autoPlay muted loop>
						Image Search Engine | ReactJS web app Demo
					</video>
				</div>
				<div className="rounded-xl  overflow-hidden">
					<video src={infinityImageSlider} autoPlay muted loop>
						Image Search Engine | ReactJS web app Demo
					</video>
				</div>
			</div>
			<Link className="mt-10 block">All projects</Link>
		</div>
	);
}

export default Projects;
