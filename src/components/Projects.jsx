// ASSETS
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";
// ROUTER & DOM
import ProjectPreview from "./ProjectPreview";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../main";

function Projects() {
	const {
		bmPreview,
		epicPreview,
		imageSearchEnginePreview,
		infinityImageSliderPreview,
		tributePreview,
		abPreview,
		srsPreview,
	} = useContext(MyContext);

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
				<ProjectPreview
					video={bmPreview}
					projectSummary={
						"BlinkMart E-Commerce| ReactJS web app Demo"
					}
					projectTitle={"BlinkMart | E-Commerce"}
					projectType={"E-Commerce Web App "}
					technologies={"React JS, Router, Tailwind CSS, & Firebase"}
					gitHubUrl={
						"https://github.com/CodeBustler/blinkmart_eCommerce"
					}
					projectUrl={"https://blinkmart.netlify.app/"}
				/>
				<ProjectPreview
					video={epicPreview}
					projectSummary={"Epic News | ReactJS web app Demo"}
					projectTitle={"Epic News | Realtime"}
					projectType={"News Web App"}
					technologies={"React JS & BootStrap 5 (NewsApi.org)"}
					gitHubUrl={"https://github.com/CodeBustler/epicNews"}
					projectUrl={"https://epic-news-cb.netlify.app/"}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				<ProjectPreview
					video={imageSearchEnginePreview}
					projectSummary={"Image Search Engine | Demo"}
					projectTitle={"Image Search Engine"}
					gitHubUrl={
						"https://github.com/CodeBustler/image-search-engine"
					}
					projectUrl={"https://image-search-engine-cb.netlify.app/"}
				/>
				<ProjectPreview
					video={tributePreview}
					projectSummary={"Iron Man Tribute Demo | HTML & CSS"}
					projectTitle={"Iron Man | Tribute Page"}
					gitHubUrl={
						"https://github.com/CodeBustler/tribute-page-ironman"
					}
					projectUrl={"https://tribute-ironman.netlify.app/"}
				/>

				<ProjectPreview
					video={infinityImageSliderPreview}
					projectSummary={
						"Infinity Images Slider Demo | HTML, CSS & JavaScript"
					}
					projectTitle={"Infinity Images | Slider"}
					gitHubUrl={
						"https://github.com/CodeBustler/infinity-image-slider"
					}
					projectUrl={"https://infinity-images-slider.netlify.app/"}
				/>
			</div>
		</div>
	);
}

export default Projects;
