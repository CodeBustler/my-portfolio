import { lazy, useContext, Suspense } from "react";
import { MyContext } from "../main";
import { FaExternalLinkAlt } from "react-icons/fa";

// COMPANY LOGOS
import cognitivZenLogo from "../assets/cognitivzen.png";
import microsoftLogo from "../assets/Microsoft.svg";
import springLogo from "../assets/spring.png";

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

	const cognitivZenProjects = [
		{
			title: "DataZen Analytics Platform",
			role: "Full Stack Developer (Frontend-focused)",
			environment: "React.js, Node.js, Express.js, TypeScript, PostgreSQL, Docker, Apache Superset, Webhooks",
			description: "Built an AI-driven Analytics & Reporting Platform for natural language queries, real-time analytics, and data visualization.",
			items: [
				"Developed React analytics dashboards with dynamic charts, filters, and data export.",
				"Built Node.js services for asynchronous processing and API rate limiting.",
				"Implemented secure token-based authentication for user login and access management.",
			],
		},
		{
			title: "Demos Campaign",
			role: "Full Stack Developer (Frontend-focused)",
			environment: "React.js, Node.js, Express.js, TypeScript, PostgreSQL, Webhooks",
			description: "Built an Audit Logging system to track security events, user actions, and campaign changes.",
			items: [
				"Developed Node.js services for asynchronous event logging.",
				"Built a React dashboard with search, filters, and CSV export.",
				"Developed CRUD functionality for audit logs to manage and track user activities, security events, and campaign changes.",
			],
		},
		{
			title: "Demos Social App | Using BlueSky",
			role: "Frontend Developer",
			environment: "React Native, TypeScript, Expo, MobX, AT Protocol",
			description: "Developed a cross-platform social networking application for Web, Android, and iOS.",
			items: [
				"Developed reusable UI components and screens for feeds, profiles, search, notifications, and post creation.",
				"Integrated AT Protocol APIs for authentication, timelines, posts, likes, reposts, and media uploads.",
				"Implemented responsive navigation and threaded replies while improving performance through lazy loading and prefetching.",
			],
		},
	];

	const microsoftProjects = [
		{
			title: "Microsoft Edge Browser (ImmersiveSoftFRE)",
			role: "Frontend Developer / Design Engineer",
			environment: "Markup First Architecture, Web Components, Fluent UI, HTML5, CSS3, JavaScript, TypeScript",
			url: "edge://customize",
			urlLabel: "edge://customize",
			description: "Built and shipped Microsoft Edge First Run Experience (FRE) from the ground up, enabling theme selection, layout customization, site pinning, and AI-powered theme generation via edge://customize.",
			items: [
				"Developed reusable Web Components and integrated REST APIs for user preferences.",
				"Achieved <1.8s FCP, <2.5s LCP, and 24 ms INP via code optimizations.",
				"Implemented UI animations, responsive design, and accessibility.",
				"Collaborated with UI/UX QA teams to resolve cross-browser, accessibility issues.",
			],
		},
		{
			title: "Bing Sports Segment",
			role: "Frontend Developer / Design Engineer",
			environment: "React.js, TypeScript, CSS3/SASS",
			url: "https://www.bing.com/search?q=epl+standing",
			urlLabel: "Bing Sports Standings",
			description: "Enhanced the Bing Sports standings UI with optimized performance and smooth gradient animations.",
			items: [
				"Optimized the sports table header for performance and animation.",
				"Implemented a dynamic gradient header based on UI specifications.",
				"Ensured responsive design, accessibility, and cross-device compatibility.",
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
				{/* COGNITIVZEN TECHNOLOGIES */}
				<div className="border border-gray-800 bg-[#161d2b] p-6 md:p-8 rounded-xl relative hover:border-blue-400/40 transition">
					<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center border border-gray-700/50 shadow-sm mt-0.5">
								<img
									src={cognitivZenLogo}
									alt="CognitivZen Technologies"
									className="w-full h-full object-contain"
								/>
							</div>
							<div>
								<div className="flex flex-wrap items-center gap-3">
									<h2 className="text-xl md:text-2xl text-white font-semibold">
										Software Engineer
									</h2>
									<span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
										Current Role
									</span>
								</div>
								<div className="text-gray-400 text-base md:text-lg mt-1">
									CognitivZen Technologies
									<span className="text-gray-500 text-sm ml-2">· Full-time</span>
								</div>
							</div>
						</div>
						<div className="text-gray-400 md:text-right text-sm md:text-base font-normal">
							<div className="text-blue-400 font-medium">Apr 2024 – Present · 2 yrs 6 mos</div>
							<div className="text-gray-500">Hyderabad, India · On-site</div>
						</div>
					</div>

					{/* COGNITIVZEN PROJECTS */}
					<div className="mt-6 space-y-6">
						{cognitivZenProjects.map((project, pIdx) => (
							<div key={pIdx} className="bg-[#121723]/60 p-5 rounded-lg border border-gray-800/80">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
									<h3 className="text-gray-100 text-base md:text-lg font-semibold">
										{project.title}
									</h3>
									<span className="text-xs text-gray-300 bg-gray-800/80 border border-gray-700/60 px-2.5 py-0.5 rounded w-fit">
										{project.role}
									</span>
								</div>
								<div className="text-xs text-gray-400 mb-2 font-mono bg-[#182030]/50 p-2 rounded border border-gray-800/50">
									<span className="text-gray-500 font-sans font-medium">Environment: </span>
									{project.environment}
								</div>
								<p className="text-sm text-gray-300 mb-3 font-normal">
									{project.description}
								</p>
								<ul className="font-normal text-gray-300 space-y-2 list-disc ml-5 text-sm md:text-base leading-relaxed">
									{project.items.map((task, tIdx) => (
										<li key={tIdx}>{task}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* MICROSOFT */}
				<div className="border border-gray-800 bg-[#161d2b] p-6 md:p-8 rounded-xl relative hover:border-blue-400/40 transition">
					<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-2.5 shrink-0 flex items-center justify-center border border-gray-700/50 shadow-sm mt-0.5">
								<img
									src={microsoftLogo}
									alt="Microsoft"
									className="w-full h-full object-contain"
								/>
							</div>
							<div>
								<div className="flex flex-wrap items-center gap-3">
									<h2 className="text-xl md:text-2xl text-white font-semibold">
										Frontend / React.js Developer
									</h2>
									<span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
										Contract
									</span>
								</div>
								<div className="text-gray-400 text-base md:text-lg mt-1">
									On-site Microsoft <span className="text-blue-400 font-medium">[Contract]</span>
									<span className="text-gray-500 text-sm ml-2">· 1.5 years</span>
								</div>
							</div>
						</div>
						<div className="text-gray-400 md:text-right text-sm md:text-base font-normal">
							<div className="text-blue-400 font-medium">Jul 2024 – Dec 2025 · 1.5 yrs</div>
							<div className="text-gray-500">Hyderabad, Telangana, India · On-site</div>
						</div>
					</div>

					{/* MICROSOFT PROJECTS */}
					<div className="mt-6 space-y-6">
						{microsoftProjects.map((project, pIdx) => (
							<div key={pIdx} className="bg-[#121723]/60 p-5 rounded-lg border border-gray-800/80">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
									<div className="flex items-center gap-2 flex-wrap">
										<h3 className="text-gray-100 text-base md:text-lg font-semibold">
											{project.title}
										</h3>
										{project.url && (
											<a
												href={project.url}
												target="_blank"
												rel="noreferrer"
												className="text-xs text-blue-400 hover:underline flex items-center gap-1 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20"
											>
												{project.urlLabel}
												<FaExternalLinkAlt className="text-[10px]" />
											</a>
										)}
									</div>
									<span className="text-xs text-gray-300 bg-gray-800/80 border border-gray-700/60 px-2.5 py-0.5 rounded w-fit">
										{project.role}
									</span>
								</div>
								<div className="text-xs text-gray-400 mb-2 font-mono bg-[#182030]/50 p-2 rounded border border-gray-800/50">
									<span className="text-gray-500 font-sans font-medium">Environment: </span>
									{project.environment}
								</div>
								<p className="text-sm text-gray-300 mb-3 font-normal">
									{project.description}
								</p>
								<ul className="font-normal text-gray-300 space-y-2 list-disc ml-5 text-sm md:text-base leading-relaxed">
									{project.items.map((task, tIdx) => (
										<li key={tIdx}>{task}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* SPRING INFOTECH PVT. LTD. */}
				<div className="border border-gray-800 bg-[#161d2b] p-6 md:p-8 rounded-xl hover:border-blue-400/40 transition">
					<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center border border-gray-700/50 shadow-sm mt-0.5">
								<img
									src={springLogo}
									alt="Spring Infotech"
									className="w-full h-full object-contain"
								/>
							</div>
							<div>
								<div className="flex flex-wrap items-center gap-3">
									<h2 className="text-xl md:text-2xl text-white font-semibold">
										Frontend Developer
									</h2>
									<span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
										Full-time
									</span>
								</div>
								<div className="text-gray-400 text-base md:text-lg mt-1">
									Spring Infotech Pvt. Ltd.
									<span className="text-gray-500 text-sm ml-2">· Full-time</span>
								</div>
							</div>
						</div>
						<div className="text-gray-400 md:text-right text-sm md:text-base font-normal">
							<div className="text-blue-400 font-medium">Aug 2022 – Mar 2024 · 1 yr 7 mos</div>
							<div className="text-gray-500">Bangalore Urban, Karnataka, India · Remote</div>
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
					Freelancer | Dec&apos;2022 – Present
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
