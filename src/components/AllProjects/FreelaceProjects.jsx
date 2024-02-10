import React, { lazy, Suspense, useContext } from "react";
const ProjectPreview = lazy(() => import("../ProjectPreview"));
import PreviewFallback from "../PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";
import { MyContext } from "../../main";

//----------------------------------------------
//************* FREELANCE PROJECTS **************
//----------------------------------------------
function FreelaceProjects() {
	const { abPreview, srsPreview } = useContext(MyContext);

	//----------------------------------------------
	return (
		<>
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
							projectUrl={"https://aham-brahma-demo.netlify.app/"}
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
		</>
	);
}

export default FreelaceProjects;
