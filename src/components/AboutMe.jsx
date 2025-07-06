import Footer from "./Footer";
import TapToTop from "./TapToTop";
import SeconNavbar from "./SeconNavbar";
// ICONS
import profile2 from "../assets/profile2.png";
import { FaUser } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { PiHandWavingFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

//-----------------------------------------------------
function ContactLinks({ link, title, children }) {
	return (
		<a
			href={link}
			target="_blank"
			title={title} // Change here
			className="border border-gray-700 md:border-gray-800 hover:border-gray-600 transition p-5 rounded-lg flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white"
		>
			{children}
		</a>
	);
}

//-----------------------------------------------------
function AboutMe() {
	return (
		<>
			<SeconNavbar />
			<div
				className="container mx-auto px-5 lg:px-24 py-5 min-h-[100vh] pt-10 md:pt-20 "
				id="hire_me"
			>
				<div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
					<FaUser className="text-gray-500 mb-1" />
					About Me
				</div>
				{/*CONTAINER*/}
				<div className="mt-14 flex flex-col items-center lg:items-start lg:flex-row gap-16">
					<img
						src={profile2}
						alt=""
						className="w-[250px] h-[250px] saturate-[1.1] filter contrast-[1.1] sticky lg:top-24"
					/>
					<div>
						{/*----------------------------------------------*/}
						{/******************** INTRO *********************/}
						{/*----------------------------------------------*/}
						<p className="text-gray-400 leading-7">
							<span className="text-2xl text-gray-300 ">
								<PiHandWavingFill className="inline mb-1 rotate-12 " />{" "}
								Hey there,
							</span>{" "}
							I'm Mallikarjun Mavnoor, a frontend developer from
							Karnataka, currently based in Hyderabad, India. I
							hold a{" "}
							<span className=" underline underline-offset-4 font-semibold">
								B.Tech in Computer Science
							</span>{" "}
							from JNTU (Jawaharlal Nehru Technological
							University) Hyderabad & thrive on frontend
							technologies, particularly{" "}
							<span className=" underline underline-offset-4 font-semibold">
								JavaScript & React.js.
							</span>
						</p>
						<ul className="text-gray-400 leading-7 list-disc list-inside pt-5"><li>Worked with Microsoft on feature development for the Edge browser — one of my contributions is live at <a target="_blank" href="edge://customize" className="font-semibold text-blue-400">edge://customize</a>.</li>
							<li>Built web apps and launched two call center websites as a freelancer via BigRock.</li></ul>
						{/*----------------------------------------------*/}
						{/***************** WHAT I DO ? ******************/}
						{/*----------------------------------------------*/}
						<div className="container mt-16">
							<h1 className="text-2xl md:text-3xl  font-semibold  flex items-end gap-3">
								<HiComputerDesktop className="text-gray-500 mb-1" />
								What I do ?
							</h1>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-7 mt-7">
								<div className="border border-gray-700 md:border-gray-800 hover:border-gray-600 transition p-10 rounded-lg ">
									<div className="text-lg font-semibold">
										Freelance Work:{" "}
									</div>
									<div className="text-gray-400 mt-2">
										Engaging in freelance projects offers
										real-world experience, enabling me to
										create solutions for live users. It's a
										chance to enhance my full-stack
										development understanding & expand my
										skill set.
									</div>
									<div className="  flex items-center  text-gray-300 text-xl mt-4 transition">
										<Link
											to="/all_projects"
											className="text-gray-300 text-xl flex items-center "
										>
											<FaExternalLinkAlt className="animate-pulse ml-2 m-3" />
											<small>Freelance Projects</small>
										</Link>
									</div>
								</div>

								<div className="border border-gray-700 md:border-gray-800 hover:border-gray-600 transition p-10 rounded-lg ">
									<div className="text-lg font-semibold">
										Social Media Content Creation{" "}
									</div>
									<div className="text-gray-400 mt-2">
										I actively create & share content on
										platforms like Instagram, YouTube &
										more, focusing on frontend web
										development. This helps me enhance my
										knowledge and skills in frontend
										development.
									</div>
									<div className="  flex items-center  text-gray-300 text-xl mt-4 transition">
										<a
											href="https://www.instagram.com/codebustler/"
											target="blank"
											className="hover:text-pink-400 hover:scale-125 transition pl-1 p-3 cursor-pointer"
											title="Instagram/CodeBustler"
										>
											<SiInstagram />
										</a>
										<a
											href="https://www.youtube.com/@codebustler/"
											target="blank"
											className="hover:text-red-500 hover:scale-125 transition p-3 cursor-pointer mr-3 group-hover:animate-bounce"
											title="Youtube/CodeBustler"
										>
											<BsYoutube className="scale-125 " />
										</a>
										<small title="Click on icons to open!">
											@CodeBustler
										</small>
									</div>
								</div>
								<div className="border border-gray-700 md:border-gray-800 hover:border-gray-600 transition p-10 rounded-lg ">
									<div className="text-lg font-semibold">
										Side Projects:{" "}
									</div>
									<div className="text-gray-400 mt-2">
										I regularly undertake side projects to
										maintain coding consistency & explore
										new concepts. You can explore my
										portfolio of all projects in the
										dedicated section/click Link
									</div>

									<div className="  flex items-center  text-gray-300 text-xl mt-4 transition">
										<Link
											to="/all_projects"
											className="text-gray-300 text-xl flex items-center "
										>
											<FaExternalLinkAlt className="animate-pulse ml-2 m-3" />
											<small>My Projects</small>
										</Link>
									</div>
								</div>
								<div className="border border-gray-700 md:border-gray-800 hover:border-gray-600 transition p-10 rounded-lg ">
									<div className="text-lg font-semibold">
										Continuous Learning:{" "}
									</div>
									<div className="text-gray-400 mt-2">
										I'm driven to explore new frontend
										technologies, keeping my coding skills
										current. Additionally, I'm eager to exp&
										into full-stack development, enriching
										my skill set further.
									</div>
								</div>
							</div>
						</div>

						{/*----------------------------------------------*/}
						{/***************** CONTACT ME ******************/}
						{/*----------------------------------------------*/}
						<div className="container mt-16">
							<h1 className="text-2xl md:text-3xl  font-semibold  flex items-end gap-3">
								<PiPhoneCallFill className="text-gray-500 mb-1 scale-110" />
								Contact Me
							</h1>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-7 mt-7">
								<ContactLinks
									link={
										"mailto:mallikarjun.mavnoor@gmail.com"
									}
									title={"mallikarjun.mavnoor@gmail.com"}
								>
									<MdEmail className="text-2xl text-purple-500" />
									<div>Send a mail</div>
								</ContactLinks>
								<ContactLinks
									link={
										"https://www.linkedin.com/in/mallikarjun-mavnoor"
									}
									title={"@mallikarjun-mavnoor"}
								>
									<IoLogoLinkedin className="text-2xl text-blue-500" />
									LinkedIn
								</ContactLinks>
								<ContactLinks
									link={
										"https://www.instagram.com/codebustler"
									}
									title={"@CodeBustler"}
								>
									<SiInstagram
										className="text-xl text-pink-500
									"
									/>
									Instagram
								</ContactLinks>

								<ContactLinks>
									<MdLocationOn className="text-2xl text-orange-500" />
									Hyderabad, India
								</ContactLinks>
							</div>
						</div>
					</div>
				</div>
			</div>
			<TapToTop />
			<Footer />
		</>
	);
}

export default AboutMe;
