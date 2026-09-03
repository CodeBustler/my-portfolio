import { lazy, useContext, Suspense } from "react";
import { MyContext } from "../main";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectPreview = lazy(() => import("./ProjectPreview"));
import PreviewFallback from "./PreviewFallback";
// ASSETS
import { MdWork } from "react-icons/md";

// -------------------------------------------------------------

function PastWork() {
	// PROJECT PREVIEWS (mp4)
	const { abPreview, srsPreview } = useContext(MyContext);

	const freelanceProjectsDetails = [
		{
			video: abPreview,
			projectSummary: "Freelance Project 2 | Preview",
			projectTitle: "Freelance Project 2",
			projectType: "Online presence & featuring company details",
			technologies: "HTML5, CSS3 & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/ab-website",
			projectUrl: "https://aham-brahma-demo.netlify.app/",
		},
		{
			video: srsPreview,
			projectSummary: "Freelance Project 2 | Preview",
			projectTitle: "Freelance Project 2",
			projectType: "Online presence & featuring company details",
			technologies: "HTML5, CSS3 & JavaScript",
			gitHubUrl: "https://github.com/CodeBustler/srs-website",
			projectUrl: "https://srs-satellite-demo.netlify.app/",
		},
	];

	const cognitivZenHighlights = [
		{
			category: "Microsoft Vendor Engagement (1 Year On-site)",
			items: [
				"Built and shipped Microsoft Edge First Run Experience (ImmersiveSoftFRE at edge://customize) from the ground up with theme selection, site pinning, and AI-powered customization.",
				"Achieved <1.8s FCP, <2.5s LCP, and 24 ms INP through code splitting, lazy loading, and asset optimizations.",
				"Developed reusable Web Components and integrated REST APIs for user preferences using Fluent UI and FAST Elements.",
				"Enhanced Bing Sports standings UI with optimized performance, dynamic gradient header animations, and cross-browser compatibility.",
				"Applied WCAG accessibility standards and collaborated with UI/UX QA teams to resolve cross-browser/a11y defects.",
			],
		},
		{
			category: "DataZen Analytics Platform & Demos Products",
			items: [
				"Built DataZen Analytics: AI-driven analytics & reporting platform featuring natural language queries, real-time analytics, and dynamic React dashboards with interactive charts and filters.",
				"Engineered Node.js backend services for asynchronous event processing, rate limiting, and token-based authentication.",
				"Built Demos Campaign Audit Logging system with searchable React dashboard, filters, CSV exports, and CRUD audit logs for security tracking.",
				"Developed Demos Social App (BlueSky / AT Protocol) cross-platform client using React Native, Expo, MobX, lazy loading, and prefetching.",
			],
		},
	];

	const springInfotechHighlights = [
		"Developed reusable React components and modular UI elements to enhance code efficiency and maintainability.",
		"Integrated REST APIs using Fetch API and Axios for real-time data fetching, error handling, and state synchronization.",
		"Collaborated closely with UI/UX designers to implement pixel-perfect, responsive layouts across devices.",
		"Worked with QA teams to identify, debug, and resolve UI defects and cross-browser compatibility issues.",
		"Actively participated in daily standups, sprint planning, and Agile/Scrum delivery cycles.",
	];

	// -------------------------------------------------------------
	return (
		<div
			className="container mx-auto pt-24 md:pt-28 font-semibold"
			id="work"
		>
			<h1 className="text-2xl md:text-3xl lg:text-4xl flex items-end gap-3">
				<MdWork className="text-gray-500 mb-1" />
				Work Experience
			</h1>

			{/* WORK HISTORY TIMELINE */}
			<div className="mt-8 space-y-10">
				{/* 1. COGNITIVZEN TECHNOLOGIES */}
				<div className="border border-gray-800 bg-[#161d2b] p-6 md:p-8 rounded-xl relative hover:border-yellow-400/40 transition">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
						<div>
							<div className="flex flex-wrap items-center gap-3">
								<h2 className="text-xl md:text-2xl text-white font-semibold">
									Frontend Developer
								</h2>
								<span className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full font-medium">
									Current Role
								</span>
							</div>
							<div className="text-gray-400 text-lg mt-1">
								CognitivZen Technologies
								<span className="text-gray-500 text-sm ml-2">· Full-time</span>
							</div>
						</div>
						<div className="text-gray-400 md:text-right text-sm md:text-base font-normal">
							<div className="text-yellow-400 font-medium">Apr 2024 – Present</div>
							<div className="text-gray-500">Hyderabad, India</div>
						</div>
					</div>

					{/* ENGAGEMENT CALLOUT */}
					<div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1F2937] border border-blue-500/30 text-blue-300 text-sm font-normal">
						<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
						<span><strong>On-site vendor engagement with Microsoft for 1 year</strong> (Edge Browser &amp; Bing Sports)</span>
					</div>

					{/* DETAILS */}
					<div className="mt-6 space-y-6">
						{cognitivZenHighlights.map((section, sIdx) => (
							<div key={sIdx} className="bg-[#121723]/60 p-5 rounded-lg border border-gray-800/80">
								<h3 className="text-yellow-400 text-sm uppercase tracking-wider font-semibold mb-3">
									{section.category}
								</h3>
								<ul className="font-normal text-gray-300 space-y-2.5 list-disc ml-5 text-sm md:text-base leading-relaxed">
									{section.items.map((task, tIdx) => (
										<li key={tIdx}>{task}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* 2. SPRING INFOTECH PVT. LTD. */}
				<div className="border border-gray-800 bg-[#161d2b] p-6 md:p-8 rounded-xl hover:border-gray-700 transition">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
						<div>
							<div className="flex flex-wrap items-center gap-3">
								<h2 className="text-xl md:text-2xl text-white font-semibold">
									Frontend Development Intern
								</h2>
								<span className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-medium">
									Internship
								</span>
							</div>
							<div className="text-gray-400 text-lg mt-1">
								Spring Infotech Pvt. Ltd.
							</div>
						</div>
						<div className="text-gray-400 md:text-right text-sm md:text-base font-normal">
							<div className="text-gray-300 font-medium">Sep 2023 – Mar 2024</div>
							<div className="text-gray-500">Bangalore, India</div>
						</div>
					</div>

					<div className="mt-6 bg-[#121723]/60 p-5 rounded-lg border border-gray-800/80">
						<ul className="font-normal text-gray-300 space-y-2.5 list-disc ml-5 text-sm md:text-base leading-relaxed">
							{springInfotechHighlights.map((task, index) => (
								<li key={index}>{task}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="text-gray-500 text-2xl mt-10 underline underline-offset-8">
				Freelance Work
			</div>

			<div className="text-gray-300 leading-7 m-4">
				<h2 className="font-semibold text-lg flex items-center gap-3">
					FrontEnd Developer
					<a href="#testimonials" className="text-gray-500 ">
						<FaExternalLinkAlt className="inline mb-1 mr-1" />
						Testimonials
					</a>
				</h2>
				<div className="text-gray-500 text-md">
					Freelancer | Dec'2022- Present
				</div>
				<ul className="font-normal  list-disc ml-6 mt-2">
					<li>
						Develop visually appealing websites and web applications
						with a focus on user experience and functionality..
					</li>
					<li>
						Ensure mobile-friendly responsiveness across all
						platforms for seamless accessibility.
					</li>
					<li>
						Utilize cutting-edge technologies including React JS,
						React Router, Redux, JS, Tailwind CSS to build robust
						and dynamic experiences.
					</li>
					<li>
						Implement Firebase for authentication and data storage,
						ensuring secure and scalable backend solutions.
					</li>
					<li>
						Successfully completed two projects, including the
						development of online presences for call center
						companies and business process outsourcing (BPO) firms.
					</li>
				</ul>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-8">
				{freelanceProjectsDetails.map((project, index) => (
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

export default PastWork;
