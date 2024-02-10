import React, { lazy, Suspense, useContext } from "react";
const ProjectPreview = lazy(() => import("../ProjectPreview"));
import PreviewFallback from "../PreviewFallback";
import { BiSubdirectoryRight } from "react-icons/bi";
import { MyContext } from "../../main";

//----------------------------------------------
//************* MINI PROJECTS **************
//----------------------------------------------
function MiniProjects() {
	const {
		// PROJECT PREVIEWS (mp4)
		calcPreview,
		cbPreview,
		checklistPreview,
		dicePreview,
		diwaliPreview,
		emojiPreview,
		flipCardsPreview,
		formValidationPreview,
		googlePreview,
		gptPreview,
		hostingerPreview,
		musicPlayerPreview,
		netflixPreview,
		notePreview,
		productLandingPreview,
		skillBarPreview,
		tipPreview,
	} = useContext(MyContext);

	//----------------------------------------------
	const miniProjectsDetails = [
		{
			video: emojiPreview,
			projectSummary: "Emoji Generator | Preview",
			projectTitle: "Emoji Generator",
			gitHubUrl: "https://github.com/CodeBustler/random-emoji-generator",
			projectUrl: "https://random-emoji-generator-cb.netlify.app/",
		},
		{
			video: tipPreview,
			projectSummary: "Tip Calculator | Preview",
			projectTitle: "Tip Calculator",
			gitHubUrl: "https://github.com/CodeBustler/tip-calculator",
			projectUrl: "https://tip-calculator-cb.netlify.app/",
		},
		{
			video: productLandingPreview,
			projectSummary: "Product Landing | Preview",
			projectTitle: "Product Landing Page",
			gitHubUrl: "https://github.com/CodeBustler/product-landing-page",
			projectUrl: "https://product-landing-page-cb.netlify.app/",
		},
		{
			video: diwaliPreview,
			projectSummary: "Diwali Quotes",
			projectTitle: "Diwali Quotes",
			gitHubUrl: "https://github.com/CodeBustler/diwali-quotes",
			projectUrl: "https://diwali-quotes.netlify.app/",
		},
		{
			video: hostingerPreview,
			projectSummary: "Pricing Card | Preview",
			projectTitle: "Pricing Card",
			gitHubUrl: "https://github.com/CodeBustler/pricing-card-hostinger",
			projectUrl: "https://pricing-card-hostinger.netlify.app/",
		},
		{
			video: formValidationPreview,
			projectSummary: "Form Validation | Preview",
			projectTitle: "Form Validation",
			gitHubUrl: "https://github.com/CodeBustler/form-validation",
			projectUrl: "https://form-validation-cb.netlify.app/",
		},
		{
			video: calcPreview,
			projectSummary: "Calculator",
			projectTitle: "Calculator",
			gitHubUrl:
				"https://github.com/CodeBustler/simple-standard-calculator",
			projectUrl: "https://simple-standard-calculator.netlify.app/",
		},

		{
			video: dicePreview,
			projectSummary: "Dice Game ",
			projectTitle: "Dice Game ",
			gitHubUrl: "https://github.com/CodeBustler/dice-game",
			projectUrl: "https://dice-game-codebustler.netlify.app/",
		},
		{
			video: skillBarPreview,
			projectSummary: "Skill Bars Animation | Preview",
			projectTitle: "Skill Bars",
			gitHubUrl: "https://github.com/CodeBustler/skills-bar-animation",
			projectUrl: "https://skills-bar-animation.netlify.app/",
		},

		{
			video: notePreview,
			projectSummary: "Keep Note | Preview",
			projectTitle: "Keep Note ",
			gitHubUrl: "https://github.com/CodeBustler/note-app",
			projectUrl: "https://note-app-cb.netlify.app/",
		},
		{
			video: netflixPreview,
			projectSummary: "Netflix Logo Animation| Preview",
			projectTitle: "Netflix Logo",
			gitHubUrl: "https://github.com/CodeBustler/logo-animation-netflix",
			projectUrl: "https://netflix-logo-animation-cb.netlify.app/",
		},
		{
			video: musicPlayerPreview,
			projectSummary: "Music Player | Preview",
			projectTitle: "Music Player",
			gitHubUrl: "https://github.com/CodeBustler/music-player",
			projectUrl: "https://music-player-cb.netlify.app/",
		},

		{
			video: gptPreview,
			projectSummary: "ChatGPT UI | Preview",
			projectTitle: "ChatGPT UI",
			gitHubUrl: "https://github.com/CodeBustler/chatgpt-clone",
			projectUrl: "https://chat-gpt-ui-clone.netlify.app/",
		},
		{
			video: googlePreview,
			projectSummary: "Google Search | Preview",
			projectTitle: "Google Page",
			gitHubUrl: "https://github.com/CodeBustler/google-page",
			projectUrl: "https://google-search-ui-cb.netlify.app/",
		},

		{
			video: flipCardsPreview,
			projectSummary: "Flip Card | 3D",
			projectTitle: "Flip Card | 3D",
			gitHubUrl: "https://github.com/CodeBustler/flip-cards",
			projectUrl: "https://flip-cards-cb.netlify.app/",
		},
	];

	//----------------------------------------------

	return (
		<>
			<div className="mt-24">
				<h2 className="text-2xl text-gray-200  flex items-center gap-3">
					<BiSubdirectoryRight className="text-4xl text-gray-500 " />
					Mini Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3  gap-10 mt-8">
					{miniProjectsDetails.map((project, index) => (
						<Suspense fallback={<PreviewFallback />} key={index}>
							<ProjectPreview
								video={project.video}
								projectSummary={project.projectSummary}
								projectTitle={project.projectTitle}
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

export default MiniProjects;
