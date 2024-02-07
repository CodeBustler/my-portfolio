// ASSETS
import { MdWork } from "react-icons/md";
import ab from "../assets/ab.mp4";
import srs from "../assets/srs.mp4";
// COMPONENT
import ProjectPreview from "./ProjectPreview";
// -------------------------------------------------------------
function PastWork() {
	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="past_work">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold  flex items-end gap-3">
				<MdWork className="text-gray-500 mb-1" />
				Past Work
				<span className="text-gray-500 text-2xl">Freelance</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				<ProjectPreview
					video={ab}
					projectSummary={"Freelance Project 1 | Preview"}
					projectTitle={"Freelance Project 1 "}
					projectType={" HTML5, CSS3 & JavaScript"}
					technologies={"Online presence & featuring company details"}
					gitHubUrl={"https://github.com/CodeBustler/ab-website"}
					projectUrl={"https://aham-brahma-demo.netlify.app/"}
				/>

				<ProjectPreview
					video={srs}
					projectSummary={"Freelance Project 2 | Preview"}
					projectTitle={"Freelance Project 2 "}
					projectType={" HTML5, CSS3 & JavaScript"}
					technologies={"Online presence & featuring company details"}
					gitHubUrl={"https://github.com/CodeBustler/srs-website"}
					projectUrl={"https://srs-satellite-demo.netlify.app/"}
				/>
			</div>
		</div>
	);
}

export default PastWork;
