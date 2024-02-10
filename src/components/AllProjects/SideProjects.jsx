import React, { lazy, Suspense, useContext } from "react";
import { MyContext } from "../../main";
const ProjectPreview = lazy(() => import("../ProjectPreview"));
import PreviewFallback from "../PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";

function SideProjects() {
	const {
		// PROJECT PREVIEWS (mp4)s
		bmPreview,
		epicPreview,
		imageSearchEnginePreview,
		infinityImageSliderPreview,
		tributePreview,
		htmlCheatsheetPreview,
		portfolioPreview,
		qrCodePreview,
		todoListPreview,
		movieSearchPreview,
	} = useContext(MyContext);

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
			video: imageSearchEnginePreview,
			projectSummary: "Image Search Engine | Demo",
			projectTitle: "Image Search Engine",
			projectType: "Search Functionality",
			technologies: "HTML, CSS & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/image-search-engine",
			projectUrl: "https://codebustler.github.io/image-search-engine/",
		},
		{
			video: todoListPreview,
			projectSummary: "TodoList ReactJS | Demo",
			projectTitle: "Todo-List | ReactJS",
			projectType: "CRUD Operation",
			technologies: "React JS & CSS",
			gitHubUrl: "https://github.com/CodeBustler/todo-list-react",
			projectUrl: "https://todo-list-react-cb.netlify.app/",
		},
		{
			video: infinityImageSliderPreview,
			projectSummary: "Infinity Image Slider | Demo",
			projectTitle: "Image Slider",
			projectType: "API Calling (api.unsplash.com) ",
			technologies: "HTML, CSS & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/infinity-image-slider",
			projectUrl: "https://codebustler.github.io/infinity-image-slider/",
		},
	];

	const sideProjectsDetailsRow3 = [
		{
			video: movieSearchPreview,
			projectSummary: "Movie Search React App | Demo",
			projectTitle: "Movie Search | ReactJS",
			projectType: "Fetching Data | OMDB API",
			technologies: "React JS & Bootstrap",
			gitHubUrl: "https://github.com/CodeBustler/movie-search-react",
			projectUrl: "https://codebustler.github.io/movie-search-react-app/",
		},
		{
			video: tributePreview,
			projectSummary: "Tribute Page - Iron Man | Demo",
			projectTitle: "Iron Man | SuperHero",
			projectType: "Tribute Page",
			technologies: "HTML & CSS",
			gitHubUrl: "https://github.com/CodeBustler/tribute-page-ironman",
			projectUrl: "https://tribute-ironman.netlify.app/",
		},
	];

	const sideProjectsDetailsRow4 = [
		{
			video: qrCodePreview,
			projectSummary: "QR Code Generator | Demo",
			projectTitle: "QRCode Generator",
			projectType: "With : api.qrserver.com ",
			technologies: "HTML, CSS & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/qr-code-generator",
			projectUrl: "https://qr-code-generate-cb.netlify.app/",
		},
		{
			video: htmlCheatsheetPreview,
			projectSummary: "HTML CheatSheet | Demo",
			projectTitle: "HTML CheatSheet",
			projectType: "CheatSheets",
			technologies: "HTML, CSS & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/html-cheatsheet",
			projectUrl: "https://html-cheatsheet-cb.netlify.app/",
		},
		{
			video: portfolioPreview,
			projectSummary: "My Projects React JS | Demo",
			projectTitle: "My Portfolio",
			projectType: "Portfolio",
			technologies: "React JS, Tailwind CSS & React Router",
			gitHubUrl: "https://github.com/CodeBustler/my-portfolio",
			projectUrl: "https://portfolio-codebustler.netlify.app/",
		},
	];

	return (
		<div className="mt-24">
			<h2 className="text-2xl text-gray-200 flex items-center gap-3 ">
				<BiSubdirectoryRight className="text-4xl text-gray-500 " />
				Side Projects
			</h2>
			{/*---------------------------------------------------------*/}

			{/*FIRST ROW*/}
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

			{/*---------------------------------------------------------*/}

			{/*SECOND ROW*/}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				{sideProjectsDetailsRow2.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>

			{/*---------------------------------------------------------*/}

			{/*THIRD ROW*/}
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				{sideProjectsDetailsRow3.map((project, index) => (
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

			{/*---------------------------------------------------------*/}

			{/*SECOND ROW*/}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				{sideProjectsDetailsRow4.map((project, index) => (
					<Suspense fallback={<PreviewFallback />} key={index}>
						<ProjectPreview
							video={project.video}
							projectSummary={project.projectSummary}
							projectTitle={project.projectTitle}
							gitHubUrl={project.gitHubUrl}
							projectUrl={project.projectUrl}
						/>
					</Suspense>
				))}
			</div>
		</div>
	);
}

export default SideProjects;
