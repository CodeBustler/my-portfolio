import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import { SiHtml5 } from "react-icons/si";
import { TfiCss3 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

function HeroSection() {
	const [currentPara, setCurrentPara] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			// RANGE FROM 1 to 3
			setCurrentPara((prev) => (prev % 3) + 1);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="container mx-auto h-full grid place-items-center ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12  md:mt-0">
				{/*LEFT CONTAINER*/}
				<div className="order-2 md:order-1 flex flex-col gap-7 text-center md:text-left md:mb-20 ">
					<div>
						<h1 className="text-3xl md:text-4xl font-semibold ">
							Hi, I'm Mallikarjun{" "}
							<span className="hidden md:inline">Mavnoor</span>
						</h1>
						<div className="text-2xl md:text-3xl text-gray-400 mt-2">
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
					<p className="text-gray-300 leading-7 ">
						"Passionate Frontend Web Developer specializing in
						<span className="font-bold "> React JS</span>,
						Successfully delivered{" "}
						<span className="font-bold capitalize">freelance</span>{" "}
						projects with expertise in HTML, CSS, and JavaScript.
						Transforming ideas into seamless, user-friendly
						experiences, Let's build something extraordinary
						together."
					</p>

					<div className="flex items-center justify-center md:justify-start gap-5">
						<Link
							to="/about_me"
							className="border px-5 py-2 rounded hover:border-[#F6CD0A]"
						>
							About Me
						</Link>
						<Link
							to="/about_me"
							className="border px-5 py-2 rounded  hover:border-[#F6CD0A]"
						>
							Resume
						</Link>
					</div>
				</div>
				{/*RIGHT CONTAINER*/}
				<div className="order-1 md:order-2 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end lg:mr-20 gap-8">
					<img
						src={profile}
						alt="mallikarjun_mavnoor"
						className="w-40 md:w-72"
					/>
					<div className="flex md:flex-col gap-3 opacity-30 text-3xl  md:flex">
						<SiHtml5 className="text-orange-400" />
						<TfiCss3 className="text-blue-400 " />
						<IoLogoJavascript className="text-yellow-400 " />
						<FaReact className="text-blue-500 animate-spin  " />
						<SiTailwindcss className="text-green-300 " />
						<SiReactrouter className="text-red-400" />
						<SiRedux className="text-purple-400" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
