import React from "react";
import { Link } from "react-router-dom";
import bm from "../assets/bm.mp4";
import epic from "../assets/epic.mp4";
import imageSearchEngine from "../assets/imageSearchEngine.mp4";
import infinityImageSlider from "../assets/infinityImageSlider.mp4";
import tribute from "../assets/tribute.mp4";
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";

function Projects() {
	return (
		<div className="container mx-auto pt-24 md:pt-28" id="projects">
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
				{/*PREVIEW */}
				<div className="group relative rounded-xl grid-rows-2 overflow-hidden cursor-pointer">
					<video src={bm} autoPlay muted loop>
						BlinkMart E-Commerce| ReactJS web app Demo
					</video>
					<div className="absolute top-0 w-full h-full backdrop-blur hidden group-hover:grid place-items-center transition">
						<div className="flex flex-col items-center gap-8 lg:gap-4 text-center">
							<div className="flex items-center flex-col">
								<div className="bg-[#F6CD0A] text-xl lg:text-2xl font-semibold py-3 px-10 md:px-14 rounded-xl inline-block text-gray-800 border border-4 border-gray-600">
									BlinkMart
								</div>
								<div className="hidden lg:block bg-[#121723] text-gray-300 w-fit py-1 px-5 rounded-bl-xl rounded-br-xl">
									E-Commerce
								</div>
							</div>
							<div className=" hidden lg:block bg-[#121723] text-gray-300 w-fit py-3 px-7 rounded-lg ">
								React JS, Router, Tailwind CSS, & Firebase
							</div>
							<div className="flex flex-wrap items-center justify-center gap-3">
								<a
									href="https://github.com/CodeBustler/blinkmart_eCommerce"
									target="blank"
									className="bg-[#121723]  text-gray-300  py-2 w-[100px] rounded-lg flex items-center justify-center gap-2 hover:outline hover:outline-yellow-500"
								>
									<FaCode className="text-yellow-400" />
									Code
								</a>
								<a
									href="https://blinkmart.netlify.app/"
									target="blank"
									className="bg-[#121723] text-gray-300  py-2 w-[100px] rounded-lg flex items-center justify-center gap-2 hover:outline hover:outline-yellow-500 "
								>
									<TfiWorld className="text-yellow-400" />
									Live
								</a>
								<Link
									to="/project_details"
									className="bg-[#121723] text-gray-300  py-2 w-[100px] rounded-lg flex items-center justify-center gap-2 hover:outline hover:outline-yellow-500 "
								>
									<AiOutlineBars className="text-yellow-400 text-lg" />
									Detail
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/*<div className="rounded-xl  overflow-hidden">
					<video src={epic} autoPlay muted loop>
						Epic News | ReactJS web app Demo
					</video>
				</div>*/}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				{/*<div className="rounded-xl  overflow-hidden">
					<video src={imageSearchEngine} autoPlay muted loop>
						Image Search Engine Demo | HTML, CSS & JavaScript
					</video>
				</div>

				<div className="rounded-xl  overflow-hidden">
					<video src={tribute} autoPlay muted loop>
						Iron Man Tribute Demo | HTML & CSS
					</video>
				</div>
				<div className="rounded-xl  overflow-hidden">
					<video src={infinityImageSlider} autoPlay muted loop>
						Infinity Image Slider Demo | HTML, CSS & JavaScript
					</video>
				</div>*/}
			</div>
		</div>
	);
}

export default Projects;
