import React from "react";
import { Link } from "react-router-dom";
import bm from "../assets/bm.mp4";
import epic from "../assets/epic.mp4";
import imageSearchEngine from "../assets/imageSearchEngine.mp4";
import infinityImageSlider from "../assets/infinityImageSlider.mp4";
import tribute from "../assets/tribute.mp4";
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";

function Projects() {
	return (
		<div className="container mx-auto pt-28" id="projects">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
					<MdDashboard className="text-gray-500 mb-1" /> Projects
				</h1>
				<Link
					to="/all_projects"
					className=" block md:text-xl underline underline-offset-8 decoration-[#F6CD0A] flex items-center gap-5"
				>
					All projects{" "}
					<FaCircleArrowLeft className="text-2xl md:text-3xl text-[#F6CD0A]  animate-pulse" />
				</Link>
			</div>

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
		</div>
	);
}

export default Projects;
