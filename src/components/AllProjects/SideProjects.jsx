import React, { lazy, Suspense, useContext } from "react";
const ProjectPreview = lazy(() => import("../ProjectPreview"));
import PreviewFallback from "../PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";
import { MyContext } from "../../main";

function SideProjects() {
	const {
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
	return (
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
						projectSummary={"Epic News | ReactJS web app Demo"}
						projectTitle={"Epic News | Realtime"}
						projectType={"News Web App"}
						technologies={"React JS & BootStrap 5 (NewsApi.org)"}
						gitHubUrl={"https://github.com/CodeBustler/epicNews"}
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
						video={todoListPreview}
						projectSummary={"TodoList | React JS & CSS"}
						projectTitle={"TodoList | React JS"}
						gitHubUrl={
							"https://github.com/CodeBustler/todo-list-react"
						}
						projectUrl={"https://todo-list-react-cb.netlify.app/"}
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
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				{/* PREVIEW */}
				<Suspense fallback={<PreviewFallback />}>
					<ProjectPreview
						video={movieSearchPreview}
						projectSummary={"Movie Search | ReactJS web app Demo"}
						projectTitle={"Movie Search | OMDB API"}
						projectType={"Search Movie With Keyword"}
						technologies={"React JS & BootStrap (OMDB API)"}
						gitHubUrl={
							"https://github.com/CodeBustler/movie-search-react"
						}
						projectUrl={
							"https://movie-search-react-cb.netlify.app/"
						}
					/>
				</Suspense>
				<Suspense fallback={<PreviewFallback />}>
					<ProjectPreview
						video={tributePreview}
						projectSummary={"Iron Man Tribute Demo | HTML & CSS"}
						projectType={"Tribute Page"}
						technologies={"By using HTML & CSS Animation"}
						projectTitle={"Iron Man | SuperHero"}
						gitHubUrl={
							"https://github.com/CodeBustler/tribute-page-ironman"
						}
						projectUrl={"https://tribute-ironman.netlify.app/"}
					/>
				</Suspense>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				<Suspense fallback={<PreviewFallback />}>
					<ProjectPreview
						video={qrCodePreview}
						projectSummary={"QR Code Project| Demo"}
						projectTitle={"Qr Code Generator"}
						gitHubUrl={
							"https://github.com/CodeBustler/qr-code-generator"
						}
						projectUrl={"https://qr-code-generate-cb.netlify.app/"}
					/>
				</Suspense>
				<Suspense fallback={<PreviewFallback />}>
					<ProjectPreview
						video={htmlCheatsheetPreview}
						projectSummary={"HTML CheatSheet | Demo"}
						projectTitle={"HTML CheatSheet"}
						gitHubUrl={
							"https://github.com/CodeBustler/html-cheatsheet"
						}
						projectUrl={"https://html-cheatsheet-cb.netlify.app/"}
					/>
				</Suspense>
				<Suspense fallback={<PreviewFallback />}>
					<ProjectPreview
						video={portfolioPreview}
						projectSummary={"Portfolio | Demo"}
						projectTitle={"My Portfolio | React JS"}
						gitHubUrl={
							"https://github.com/CodeBustler/my-portfolio"
						}
						projectUrl={
							"https://portfolio-codebustler.netlify.app/"
						}
					/>
				</Suspense>
			</div>
		</div>
	);
}

export default SideProjects;
