import { lazy, Suspense, useContext } from "react";
import { MyContext } from "../main";
import { Link } from "react-router-dom";
const ProjectPreview = lazy(() => import("./ProjectPreview"));
import PreviewFallback from "./PreviewFallback";
// ASSETS
import { MdDashboard } from "react-icons/md";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";

//----------------------------------------------------
// ********* HERO SECTION PROJECT PREVIWS ***********
//----------------------------------------------------
function Projects() {
	const {
		// PROJECT PREVIEWS (mp4)
		edgeVideo,
		bingVideo,
		bmPreview,
		epicPreview,
		imageSearchEnginePreview,
		tributePreview,
		movieSearchPreview,
	} = useContext(MyContext);

	const microsoftProjects = [
		{
			video: edgeVideo,
			projectSummary: "Edge browser welcome page for customize themes & more",
			projectTitle: "Microsoft Edge Browser Feature",
			projectType: "Edge Themes & More ",
			technologies: "Feature Shipped Live => edge://customize",
			projectUrl: "edge://customize",
		},
		{
			video: bingVideo,
			projectSummary: "Table Header With Animation",
			projectTitle: "Bing | Sports Segment",
			projectType: "Table Header With Animation",
			technologies: "Feature Shipped Live",
			projectUrl: "https://www.bing.com/search?q=epl+standing",
		},
	];

	const sideProjectsDetailsRow1 = [
		{
			video: bmPreview,
			projectSummary: "BlinkMart E-Commerce| ReactJS web app Demo",
			projectTitle: "BlinkMart | E-Commerce",
			projectType: "E-Commerce Web App ",
			technologies: "React JS, Router, Tailwind CSS, & Firebase",
			gitHubUrl: "https://github.com/CodeBustler/blinkmart_eCommerce",
			projectUrl: "https://blinkmart.netlify.app/",
		},
		{
			video: epicPreview,
			projectSummary: "Epic News | ReactJS web app Demo",
			projectTitle: "Epic News | Realtime",
			projectType: "News Web App",
			technologies: "React JS & BootStrap 5 (NewsApi.org)",
			gitHubUrl: "https://github.com/CodeBustler/epicNews",
			projectUrl: "https://epic-news-cb.netlify.app/",
		},
	];

	const sideProjectsDetailsRow2 = [
		{
			video: tributePreview,
			projectSummary: "Tribute Page - Iron Man | Demo",
			projectTitle: "Iron Man | SuperHero",
			// projectType: "Tribute Page",
			// technologies: "HTML & CSS",
			gitHubUrl: "https://github.com/CodeBustler/tribute-page-ironman",
			projectUrl: "https://tribute-ironman.netlify.app/",
		},
		{
			video: imageSearchEnginePreview,
			projectSummary: "Image Search Engine | Demo",
			projectTitle: "Image Search Engine",
			// projectType: "Search Functionality",
			// technologies: "HTML, CSS & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/image-search-engine",
			projectUrl: "https://codebustler.github.io/image-search-engine/",
		},
		{
			video: movieSearchPreview,
			projectSummary: "Movie Search React App | Demo",
			projectTitle: "Movie Search | ReactJS",
			// projectType: "Fetching Data | OMDB API",
			// technologies: "React JS & Bootstrap",
			gitHubUrl: "https://github.com/CodeBustler/movie-search-react",
			projectUrl: "https://movie-search-react-cb.netlify.app/",
		},
	];

	//----------------------------------------------------
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

			<div className="grid grid-cols-1 md:grid-cols-2   gap-10 mt-12">
				{microsoftProjects.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							projectType={project.projectType}
							technologies={project.technologies}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>
			<hr className="mt-10 opacity-30"/>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				{sideProjectsDetailsRow1.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							projectType={project.projectType}
							technologies={project.technologies}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				{sideProjectsDetailsRow2.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							projectType={project.projectType}
							technologies={project.technologies}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>
		</div>
	);
}

export default Projects;
