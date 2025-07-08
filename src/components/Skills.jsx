import { GrTechnology } from "react-icons/gr";
import { IoMdThumbsUp } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";
//----------------------------------------------------

function Skills() {
	//----------------------------------------------------
	// ******************* SKILLS LIST *******************
	//----------------------------------------------------
	const frontEndSkills = [
		"Web Components",
		"MS Fluent UI",
		"MS Fast-Element",
		"React JS",
		"JavaScript",
		"React Router DOM ",
		"Redux Toolkit",
		"Axios",
		"Tailwind CSS",
		"CSS 3",
		"SASS",
		"HTML 5",
	];

	const versionControl = ["Azure Repos", "GitHub & Git"];
	const backendAndCloud = [
		"Microsoft Auth Library (MSAL)",
		"Firebase Auth & Cloud Firestore",
	];

	const tools = ["Visual Studio Code", "Sublime Text"];
	//----------------------------------------------------

	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="skills">
			<h1 className="text-2xl md:text-3xl lg:text-4xl md:text-4xl font-semibold flex items-end gap-3">
				<GrTechnology className="text-gray-500 mb-1" />
				Skills
				<span className="text-gray-500 text-2xl">& Technologies</span>
			</h1>
			<p className="text-gray-300 mt-5 leading-7">
				Frontend React Developer specializing in building{" "}
				<span className="font-bold "> dynamic</span> and{" "}
				<span className="font-bold "> responsive</span> user interfaces.
				Proficient in <span className="font-bold ">React JS</span>,{" "}
				<span className="font-bold ">JavaScript</span>, and modern
				frontend technologies. Skilled in{" "}
				<span className="font-bold ">state management</span> , component
				lifecycle, and{" "}
				<span className="font-bold ">API integration</span> to create
				seamless and engaging web applications. delivering high-quality
				user experiences.
			</p>

			{/*----------------------------------------------*/}
			{/************** FRONTEND SKILLS ***************/}
			{/*----------------------------------------------*/}
			<div>
				<h2 className=" mt-8 mb-5 font-semibold text-xl text-gray-500">
					Front-End
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3  gap-6">
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
			{/************** BACKEND & CLOUD ***************/}
			{/*----------------------------------------------*/}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				<div>
					<h2 className=" mt-10 mb-5 font-semibold text-xl text-gray-500">
						Backend & Cloud Services
					</h2>
					<div className="flex flex-col  gap-6">
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
				{/************** VERSION CONTROL ***************/}
				{/*----------------------------------------------*/}
				<div>
					<h2 className=" mt-0 md:mt-10 mb-5 font-semibold text-xl text-gray-500">
						Version Control
					</h2>
					<div className="flex flex-col gap-4 md:gap-6">
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
					<h2 className=" mt-0 lg:mt-10 mb-5 font-semibold text-xl text-gray-500">
						IDE Code Editor
					</h2>
					<div className="flex flex-col gap-6">
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
