import { lazy, Suspense, useContext } from "react";
const ProjectPreview = lazy(() => import("../ProjectPreview"));
import PreviewFallback from "../PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";
import { MyContext } from "../../main";

//----------------------------------------------
//************* FREELANCE PROJECTS **************
//----------------------------------------------
function FreelaceProjects() {
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

	//----------------------------------------------
	return (
		<>
			<div className="mt-8">
				<h2 className="text-2xl text-gray-200  flex items-center gap-3">
					<BiSubdirectoryRight className="text-4xl text-gray-500 " />
					Freelance Projects
				</h2>
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
		</>
	);
}

export default FreelaceProjects;
