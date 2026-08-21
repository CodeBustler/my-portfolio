import { GrTechnology } from "react-icons/gr";
import { IoMdThumbsUp } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
//----------------------------------------------------

function Skills() {
	//----------------------------------------------------
	// ******************* SKILLS LIST *******************
	//----------------------------------------------------
	const frontEndSkills = [
		"ReactJS 19",
		"JavaScript (ES6+)",
		"Redux Toolkit",
		"Web Components",
		"Microsoft Fluent UI",
		"FAST Element",
		"React Router DOM",
		"Axios & Fetch API",
		"Tailwind CSS",
		"SASS / CSS3",
		"HTML5",
		"Accessibility (WCAG)",
	];

	const backendAndCloud = [
		"Node.js & Express.js",
		"PostgreSQL",
		"REST APIs & Webhooks",
		"JWT & OAuth 2.0",
		"MSAL (Microsoft Auth Library)",
		"Firebase Auth & Firestore",
	];

	const testingSkills = [
		"Jest",
		"React Testing Library",
		"Playwright (E2E Testing)",
	];

	const versionControl = ["Git & GitHub", "Azure Repos"];
	const tools = ["VS Code", "Cursor IDE", "Antigravity IDE"];
	//----------------------------------------------------

	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="skills">
			<h1 className="text-2xl md:text-3xl lg:text-4xl md:text-4xl font-semibold flex items-end gap-3">
				<GrTechnology className="text-gray-500 mb-1" />
				Skills
				<span className="text-gray-500 text-2xl">&amp; Technologies</span>
			</h1>
			<p className="text-gray-300 mt-5 leading-7">
				Frontend &amp; Full-Stack Engineer with over <span className="font-bold">5+ years of experience</span> building performant, accessible, and scalable web applications. Proficient in <span className="font-bold">React.js</span>, <span className="font-bold">JavaScript (ES6+)</span>, <span className="font-bold">Web Components</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">PostgreSQL</span>. Experienced in state management, automated testing (Jest, Playwright), micro-frontend architectures, and cloud integration.
			</p>

			{/*----------------------------------------------*/}
			{/************** FRONTEND SKILLS ***************/}
			{/*----------------------------------------------*/}
			<div>
				<h2 className=" mt-8 mb-5 font-semibold text-xl text-gray-500">
					Front-End &amp; UI Technologies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{frontEndSkills.map((skill, index) => (
						<div
							key={index}
							className="bg-[#1D2430] py-4 px-6 rounded-lg flex items-center gap-2 hover:outline outline-1 outline-gray-600"
						>
							<HiCheckCircle className="text-2xl text-green-500" />
							{skill}
						</div>
					))}
				</div>
			</div>
			{/*----------------------------------------------*/}
			{/************** BACKEND, TESTING & CLOUD ***************/}
			{/*----------------------------------------------*/}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<h2 className=" mt-10 mb-5 font-semibold text-xl text-gray-500">
						Backend &amp; Cloud Services
					</h2>
					<div className="flex flex-col gap-4">
						{backendAndCloud.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-4 px-6 rounded-lg flex items-center gap-2 hover:outline outline-1 outline-gray-600"
							>
								<HiCheckCircle className="text-2xl text-green-500" />
								{skill}
							</div>
						))}
					</div>
				</div>
				{/*----------------------------------------------*/}
				{/******************* TESTING ******************/}
				{/*----------------------------------------------*/}
				<div>
					<h2 className=" mt-10 mb-5 font-semibold text-xl text-gray-500">
						Automated Testing
					</h2>
					<div className="flex flex-col gap-4">
						{testingSkills.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-4 px-6 rounded-lg flex items-center gap-2 hover:outline outline-1 outline-gray-600"
							>
								<HiCheckCircle className="text-2xl text-green-500" />
								{skill}
							</div>
						))}
					</div>
				</div>
				{/*----------------------------------------------*/}
				{/************** VERSION CONTROL ***************/}
				{/*----------------------------------------------*/}
				<div>
					<h2 className=" mt-10 mb-5 font-semibold text-xl text-gray-500">
						Version Control
					</h2>
					<div className="flex flex-col gap-4">
						{versionControl.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-4 px-6 rounded-lg flex items-center gap-2 hover:outline outline-1 outline-gray-600"
							>
								<HiCheckCircle className="text-2xl text-green-500" />
								{skill}
							</div>
						))}
					</div>
				</div>
				{/*----------------------------------------------*/}
				{/********************* TOOLS ********************/}
				{/*----------------------------------------------*/}
				<div>
					<h2 className=" mt-10 mb-5 font-semibold text-xl text-gray-500">
						IDEs &amp; Environments
					</h2>
					<div className="flex flex-col gap-4">
						{tools.map((skill, index) => (
							<div
								key={index}
								className="bg-[#1D2430] py-4 px-6 rounded-lg flex items-center gap-2 hover:outline outline-1 outline-gray-600"
							>
								<HiCheckCircle className="text-2xl text-green-500" />
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
