import React from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import avatar from "../assets/avatar.png";

function Testimonials() {
	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="testimonials">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-end gap-3">
				<IoMdThumbsUp className="text-gray-500  mb-1" />
				Client Testimonials
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				<div className="rounded-lg grid-rows-2 overflow-hidden bg-[#1D2430] p-10">
					<AiFillCode className="text-4xl text-gray-500" />
					<p className="leading-7 text-gray-300 mt-5 px-5">
						Lorem, ipsum dolor, sit amet consectetur adipisicing
						elit. Quasi error neque rem, optio vitae iste molestiae
						voluptatum harum itaque, inventore sint nam cupiditate,
						alias, explicabo! Beatae, eligendi dicta alias delectus!
					</p>
					<div className="flex items-center justify-center gap-5 mt-7">
						<img
							src={avatar}
							alt="avatar"
							className="rounded-full w-14"
						/>
						<div className="text-center">
							<p>Client Name</p>
							<p className="text-gray-300 text-sm">Designation</p>
						</div>
					</div>
				</div>
				<div className="rounded-lg grid-rows-2 overflow-hidden bg-[#1D2430] p-10">
					<AiFillCode className="text-4xl text-gray-500" />
					<p className="leading-7 text-gray-300 mt-5 px-5">
						Lorem, ipsum dolor, sit amet consectetur adipisicing
						elit. Quasi error neque rem, optio vitae iste molestiae
						voluptatum harum itaque, inventore sint nam cupiditate,
						alias, explicabo! Beatae, eligendi dicta alias delectus!
					</p>
					<div className="flex items-center justify-center gap-5 mt-7">
						<img
							src={avatar}
							alt="avatar"
							className="rounded-full w-14"
						/>
						<div className="text-center">
							<p>Client Name</p>
							<p className="text-gray-300 text-sm">Designation</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
