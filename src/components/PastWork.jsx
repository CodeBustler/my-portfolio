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

	// -------------------------------------------------------------
	return (
		<div
			className="container mx-auto pt-24 md:pt-28 font-semibold"
			id="past_work"
		>
			<h1 className="text-2xl md:text-3xl lg:text-4xl   flex items-end gap-3">
				<MdWork className="text-gray-500 mb-1" />
				Past Work
			</h1>
			<div>
				<div className="text-gray-500 text-2xl mt-6 underline underline-offset-8">
					Current Employment
				</div>
				<div className="text-gray-300 leading-7 m-4">
					<h2 className="font-semibold text-lg">
						FrontEnd Developer
					</h2>
					<div className="text-gray-500 text-md">
						@Spring Infotech Pvt Ltd | Mar'2021 - Present
					</div>
					<ul className="font-normal list-disc ml-6 mt-2">
						<li>
							Actively participate in scrum master meetings/daily
							standup meetings, and sprint planning sessions.
						</li>
						<li>
							Gather requirements and contribute to coding
							efforts.
						</li>
						<li>
							Develop reusable React components to optimize code
							efficiency.
						</li>
						<li>
							Integrate APIs to facilitate data fetching and
							updating within applications.
						</li>
						<li>
							Collaborate closely with UI/UX designers to ensure
							user-friendly interfaces.
						</li>
						<li>
							Work with QA teams to identify and resolve bugs
							effectively.
						</li>
						<li>
							Manage deployment and releases using Git across
							different environments.
						</li>
					</ul>
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
