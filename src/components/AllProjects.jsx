import React, { lazy, Suspense, useContext } from "react";
import SeconNavbar from "./SeconNavbar";
import TapToTop from "./TapToTop";
import Footer from "./Footer";
// ICONS
import { BiSubdirectoryRight } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MyContext } from "../main";
// LAZY LOAD
const ProjectPreview = lazy(() => import("./ProjectPreview"));
import PreviewFallback from "./PreviewFallback";
// ----------------------------------------------------

function AllProjects() {
	const {
		// PROJECT PREVIEWS
		bmPreview,
		epicPreview,
		imageSearchEnginePreview,
		infinityImageSliderPreview,
		tributePreview,
		abPreview,
		srsPreview,
	} = useContext(MyContext);

	// ----------------------------------------------------
	return (
		<>
			<SeconNavbar />

			<div className="container mx-auto px-5 lg:px-24 py-5 min-h-[100vh] pt-10 md:pt-20 ">
				<div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3 ">
					<MdDashboard className="text-gray-500 mb-1" />
					All Projects
				</div>
				<hr className="mt-4 opacity-10" />
				{/*----------------------------------------------*/}
				{/************* FREELANCE PROJECTS **************/}
				{/*----------------------------------------------*/}
				<div className="mt-8">
					<h2 className="text-2xl text-gray-200  flex items-center gap-3">
						<BiSubdirectoryRight className="text-4xl text-gray-500 " />
						Freelance Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-8">
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={abPreview}
								projectSummary={"Freelance Project 1 | Preview"}
								projectTitle={"Freelance Project 1 "}
								projectType={" HTML5, CSS3 & JavaScript"}
								technologies={
									"Online presence & featuring company details"
								}
								gitHubUrl={
									"https://github.com/CodeBustler/ab-website"
								}
								projectUrl={
									"https://aham-brahma-demo.netlify.app/"
								}
							/>
						</Suspense>
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={srsPreview}
								projectSummary={"Freelance Project 2 | Preview"}
								projectTitle={"Freelance Project 2 "}
								projectType={" HTML5, CSS3 & JavaScript"}
								technologies={
									"Online presence & featuring company details"
								}
								gitHubUrl={
									"https://github.com/CodeBustler/srs-website"
								}
								projectUrl={
									"https://srs-satellite-demo.netlify.app/"
								}
							/>
						</Suspense>
					</div>
				</div>
				{/*----------------------------------------------*/}
				{/***************** SIDE PROJECTS ****************/}
				{/*----------------------------------------------*/}
				<div className="mt-24">
					<h2 className="text-2xl text-gray-200 flex items-center gap-3 ">
						<BiSubdirectoryRight className="text-4xl text-gray-500 " />
						Side Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
						{/* PREVIEW */}
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={bmPreview}
								projectSummary={
									"BlinkMart E-Commerce| ReactJS web app Demo"
								}
								projectTitle={"BlinkMart | E-Commerce"}
								projectType={"E-Commerce Web App "}
								technologies={
									"React JS, Router, Tailwind CSS, & Firebase"
								}
								gitHubUrl={
									"https://github.com/CodeBustler/blinkmart_eCommerce"
								}
								projectUrl={"https://blinkmart.netlify.app/"}
							/>
						</Suspense>
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={epicPreview}
								projectSummary={
									"Epic News | ReactJS web app Demo"
								}
								projectTitle={"Epic News | Realtime"}
								projectType={"News Web App"}
								technologies={
									"React JS & BootStrap 5 (NewsApi.org)"
								}
								gitHubUrl={
									"https://github.com/CodeBustler/epicNews"
								}
								projectUrl={"https://epic-news-cb.netlify.app/"}
							/>
						</Suspense>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={imageSearchEnginePreview}
								projectSummary={"Image Search Engine | Demo"}
								projectTitle={"Image Search Engine"}
								gitHubUrl={
									"https://github.com/CodeBustler/image-search-engine"
								}
								projectUrl={
									"https://image-search-engine-cb.netlify.app/"
								}
							/>
						</Suspense>
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={tributePreview}
								projectSummary={
									"Iron Man Tribute Demo | HTML & CSS"
								}
								projectTitle={"Iron Man | Tribute Page"}
								gitHubUrl={
									"https://github.com/CodeBustler/tribute-page-ironman"
								}
								projectUrl={
									"https://tribute-ironman.netlify.app/"
								}
							/>
						</Suspense>
						<Suspense fallback={<PreviewFallback />}>
							<ProjectPreview
								video={infinityImageSliderPreview}
								projectSummary={
									"Infinity Images Slider Demo | HTML, CSS & JavaScript"
								}
								projectTitle={"Infinity Images | Slider"}
								gitHubUrl={
									"https://github.com/CodeBustler/infinity-image-slider"
								}
								projectUrl={
									"https://infinity-images-slider.netlify.app/"
								}
							/>
						</Suspense>
					</div>
				</div>
				<TapToTop />
			</div>
			<Footer />
		</>
	);
}

export default AllProjects;
