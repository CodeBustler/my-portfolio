import { GrTechnology } from "react-icons/gr";
import { IoMdThumbsUp } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
//----------------------------------------------------

function Skills() {
	//----------------------------------------------------
	// ******************* SKILLS LIST *******************
	//----------------------------------------------------
	const frontEndSkills = [
		"JavaScript (ES6+)",
		"TypeScript",
		"React 19",
		"Redux Toolkit",
		"React Router",
		"Axios",
		"React Native",
	];

	const uiTechnologies = [
		"HTML5",
		"CSS3",
		"Tailwind CSS",
		"Sass",
		"Web Components",
		"Microsoft Fluent UI",
		"FAST Elements",
		"Accessibility (WCAG)",
	];

	const testingSkills = [
		"Jest",
		"React Testing Library",
	];

	const backendSkills = [
		"Node.js",
		"Express.js",
		"PostgreSQL",
		"REST APIs",
		"Webhooks",
	];

	const authSkills = [
		"JWT",
		"MSAL (Microsoft Authentication Library)",
	];

	const toolsAndMethodologies = [
		"Git & GitHub",
		"Azure Repos",
		"VS Code",
		"Jira",
		"Agile / Scrum",
		"Chrome DevTools",
		"Redux DevTools",
	];
	//----------------------------------------------------

	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="skills">
			<h1 className="text-2xl md:text-3xl lg:text-4xl md:text-4xl font-semibold flex items-end gap-3">
				<GrTechnology className="text-gray-500 mb-1" />
				Skills
				<span className="text-gray-500 text-2xl">&amp; Technologies</span>
			</h1>
			<p className="text-gray-300 mt-5 leading-7">
				Frontend Developer with over <span className="font-bold text-white">4+ years of experience</span> in <span className="font-bold text-white">React.js, JavaScript, and TypeScript</span>, UI Development, and working knowledge of <span className="font-bold text-white">Node.js, Express.js &amp; PostgreSQL</span>. Specialized in building high-performance, accessible (WCAG), and responsive enterprise applications with reusable Web Components, dynamic state management, and modern developer workflows.
			</p>

			{/*----------------------------------------------*/}
			{/************** FRONTEND SKILLS ***************/}
			{/*----------------------------------------------*/}
			<div className="mt-8">
				<h2 className="mb-5 font-semibold text-xl text-gray-500 flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
					Frontend Development
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{frontEndSkills.map((skill, index) => (
						<div
							key={index}
							className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-yellow-400/50 hover:bg-[#232c3a] transition"
						>
							<HiCheckCircle className="text-xl text-green-400 shrink-0" />
							<span className="text-gray-200 text-sm font-medium">{skill}</span>
						</div>
					))}
				</div>
			</div>

			{/*----------------------------------------------*/}
			{/************** UI TECHNOLOGIES ***************/}
			{/*----------------------------------------------*/}
			<div className="mt-8">
				<h2 className="mb-5 font-semibold text-xl text-gray-500 flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
					UI Technologies &amp; Design Systems
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{uiTechnologies.map((skill, index) => (
						<div
							key={index}
							className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-blue-400/50 hover:bg-[#232c3a] transition"
						>
							<HiCheckCircle className="text-xl text-green-400 shrink-0" />
							<span className="text-gray-200 text-sm font-medium">{skill}</span>
						</div>
					))}
				</div>
			</div>

			{/*----------------------------------------------*/}
			{/************** BACKEND, TESTING, AUTH & TOOLS ***************/}
			{/*----------------------------------------------*/}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
				{/* BACKEND */}
				<div>
					<h2 className="mb-4 font-semibold text-lg text-gray-400 flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
						Backend (Working Knowledge)
					</h2>
					<div className="flex flex-col gap-3">
						{backendSkills.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-emerald-400/50 hover:bg-[#232c3a] transition"
							>
								<HiCheckCircle className="text-xl text-green-400 shrink-0" />
								<span className="text-gray-200 text-sm font-medium">{skill}</span>
							</div>
						))}
					</div>
				</div>

				{/* TESTING */}
				<div>
					<h2 className="mb-4 font-semibold text-lg text-gray-400 flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span>
						Testing &amp; Quality
					</h2>
					<div className="flex flex-col gap-3">
						{testingSkills.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-purple-400/50 hover:bg-[#232c3a] transition"
							>
								<HiCheckCircle className="text-xl text-green-400 shrink-0" />
								<span className="text-gray-200 text-sm font-medium">{skill}</span>
							</div>
						))}
					</div>

					{/* AUTHENTICATION */}
					<h2 className="mt-8 mb-4 font-semibold text-lg text-gray-400 flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
						Authentication
					</h2>
					<div className="flex flex-col gap-3">
						{authSkills.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-pink-400/50 hover:bg-[#232c3a] transition"
							>
								<HiCheckCircle className="text-xl text-green-400 shrink-0" />
								<span className="text-gray-200 text-sm font-medium">{skill}</span>
							</div>
						))}
					</div>
				</div>

				{/* TOOLS & METHODOLOGIES (Spanning 2 columns on lg screens) */}
				<div className="lg:col-span-2">
					<h2 className="mb-4 font-semibold text-lg text-gray-400 flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
						Tools, Debugging &amp; Methodologies
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						{toolsAndMethodologies.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-3 px-5 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-cyan-400/50 hover:bg-[#232c3a] transition"
							>
								<HiCheckCircle className="text-xl text-green-400 shrink-0" />
								<span className="text-gray-200 text-sm font-medium">{skill}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
