import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import { SiHtml5, SiInstagram, SiLinkedin, SiStackblitz } from "react-icons/si";
import { TfiCss3 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import Resume from "../assets/MallikarjunResume.pdf";
import { ImGithub } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

function HeroSection() {
	const [currentPara, setCurrentPara] = useState(1);
	const [isDownloading, setIsDownloading] = useState(false);
	const navigateTo = useNavigate();
	// ------------------------------------------------------------------

	useEffect(() => {
		window.scrollTo(0, 0);
		const interval = setInterval(() => {
			// RANGE FROM 1 to 3
			setCurrentPara((prev) => (prev % 3) + 1);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const handleDownloadAnimation = (e) => {
		if (e.target.tagName === "A") {
			setIsDownloading(true);
			const timeoutId = setTimeout(() => setIsDownloading(false), 2500);
		}
	};

	// ------------------------------------------------------------------
	return (
		<div className="container mx-auto md:mt-24  ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12  md:mt-0">
				s
				{/*LEFT CONTAINER -----------------------------------------------------*/}
				<div className="order-2 md:order-1 flex flex-col  text-center md:text-left md:mb-20 ">
					<div>
						<h1 className="text-3xl  md:text-4xl  lg:text-5xl font-semibold ">
							Hi, I'm Mallikarjun
						</h1>
						<div className="text-2xl   lg:text-3xl text-gray-400 mt-2">
							{currentPara === 1 && (
								<p className="custom-animate-fade ">
									I love coding &lt;/&gt;
								</p>
							)}
							{currentPara === 2 && (
								<p className="custom-animate-fade ">
									I build amazing web apps
								</p>
							)}
							{currentPara === 3 && (
								<p className="custom-animate-fade ">
									I do freelance work
								</p>
							)}
						</div>
					</div>
					<p className="text-gray-300 leading-7 mt-8 ">
						"Passionate Frontend Web Developer specializing in
						<span className="font-bold "> React JS</span>,
						Successfully delivered{" "}
						<span className="font-bold capitalize">freelance</span>{" "}
						projects with expertise in HTML, CSS, and JavaScript.
						Transforming ideas into seamless, user-friendly
						experiences, Let's build something extraordinary
						together."
					</p>

					<div className="flex items-center justify-center md:justify-start text-2xl text-gray-500 mt-4">
						<a
							href="https://github.com/codebustler"
							target="blank"
							className="group p-4 md:p-0 md:py-4 md:pr-4  cursor-pointeon"
						>
							<ImGithub
								className={` group-hover:text-white group-hover:scale-125 r transiti`}
								title="@CodeBustler"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/mallikarjun-mavnoor"
							target="blank"
							className="group p-4  cursor-pointer "
						>
							<SiLinkedin
								className={` group-hover:text-[#0B63BD] group-hover:scale-125 transition`}
								title="@mallikarjun_mavnoor"
							/>
						</a>
						<a
							href="https://stackblitz.com/@CodeBustler"
							target="blank"
							className="group p-4  cursor-pointer "
						>
							<SiStackblitz
								className={` group-hover:text-[#469DF0] group-hover:scale-125 transition`}
								title="@CodeBustler"
							/>
						</a>
						<a
							href="https://instagram.com/CodeBustler"
							target="blank"
							className="group p-4  cursor-pointer "
						>
							<SiInstagram
								className={` group-hover:text-[#F72F7E] group-hover:scale-125 transition`}
								title="@CodeBustler"
							/>
						</a>
						<a
							href="https://youtube.com/@CodeBustler"
							target="blank"
							className="group p-4  cursor-pointer "
						>
							<BsYoutube
								className={` group-hover:text-[#F60002] group-hover:scale-125 transition`}
								title="@CodeBustler"
							/>
						</a>
						<a
							href="https://twitter.com/CodeBustler"
							target="blank"
							className="group p-4  cursor-pointer "
						>
							<RiTwitterXFill
								className={`group-hover:text-white group-hover:scale-125 transition`}
								title="@CodeBustler"
							/>
						</a>
					</div>
					<div className="flex items-center  justify-between md:justify-start gap-5 mt-6">
						<a
							href={Resume}
							download="Mallikarjun Resume.pdf"
							className=" bg-[#F6CD0A] active:bg-yellow-300 px-5 py-2 rounded transition flex items-center justify-center gap-3 whitespace-nowrap font-semibold text-gray-800  w-[50%] md:w-auto"
							onClick={(e) => handleDownloadAnimation(e)}
						>
							Resume{" "}
							<MdDownload
								className={`text-xl ${
									isDownloading ? "animate-bounce" : ""
								} `}
							/>
						</a>
						<Link
							to="/about_me"
							className="border border-gray-500 px-5 py-2 rounded hover:border-[#F6CD0A]  whitespace-nowrap  w-[50%] md:w-auto"
						>
							About Me
						</Link>
					</div>
				</div>
				{/*RIGHT CONTAINER -----------------------------------------------------*/}
				<div className="order-1 md:order-2 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-16 md:gap-24">
					<div className="relative">
						<img
							src={profile}
							alt="mallikarjun_mavnoor"
							className="w-40 md:w-80 md:blur-3xl opacity-0 md:opacity-20 md:animate-pulse"
							onClick={() => navigateTo("/about_me")}
							title="Tap to know about me!"
						/>
						<img
							src={profile}
							alt="mallikarjun_mavnoor"
							className="absolute top-5 right-1 w-40 md:w-72"
							onClick={() => navigateTo("/about_me")}
							title="Tap to know about me!"
						/>
					</div>
					<div className="flex md:flex-col gap-3  text-3xl  md:flex ">
						<SiHtml5 className="text-orange-400 opacity-30 hover:animate-bounce cursor-pointer" />
						<TfiCss3 className="text-blue-400 opacity-30 hover:animate-bounce cursor-pointer " />
						<IoLogoJavascript className="text-yellow-400 opacity-30 hover:animate-bounce cursor-pointer" />
						<FaReact className="text-blue-500 animate-spin opacity-40 hover:animate-bounce cursor-pointer  " />
						<SiTailwindcss className="text-green-300 opacity-30 hover:animate-bounce cursor-pointer " />
						<SiReactrouter className="text-red-400 opacity-30 hover:animate-bounce cursor-pointer" />
						<SiRedux className="text-purple-400 opacity-30 hover:animate-bounce cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
