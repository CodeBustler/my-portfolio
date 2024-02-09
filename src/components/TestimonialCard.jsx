import { useEffect, useState } from "react";
// ASSETS
import { AiFillCode } from "react-icons/ai";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";

//----------------------------------------------------
// ********* REUSE COMPONENT | TESTIMONIALS *********
//----------------------------------------------------
function TestimonialCard({
	message,
	avatar,
	logo,
	clientName,
	desig,
	org,
	officialUrl,
}) {
	//----------------------------------------------------
	const [changeAvatar, setChangeAvatar] = useState(avatar);

	// ********* DYNAMIC LOGO AVATAR CHANGINH *********
	useEffect(() => {
		let intervalId;

		intervalId = setInterval(() => {
			setChangeAvatar((prevAvatar) =>
				prevAvatar === logo ? avatar : logo,
			);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	//----------------------------------------------------
	return (
		<div className="relative rounded-lg grid-rows-2 overflow-hidden bg-[#1D2430] p-8 md:p-10 hover:outline outline-1 outline-gray-600 ">
			<div className="flex gap-4 ">
				<div className="relative">
					<img
						src={changeAvatar}
						alt="avatar"
						className="rounded-full w-[70px] h-[70px] "
					/>
				</div>
				<div className="flex flex-col justify-center">
					<p>{clientName}</p>
					<p className="text-gray-400 text-sm">{desig}</p>
					<a
						href={officialUrl}
						className="text-gray-400 text-sm"
						target="blank"
					>
						{org}
					</a>
				</div>
			</div>
			<p className="leading-7 text-gray-300 z-50  mt-6 ">{message}</p>
			<div className="mt-6 flex items-center gap-3">
				<span className="text-gray-400">Rating :</span>
				<div className="flex items-center gap-1 text-lg text-yellow-500 ">
					<MdStar />
					<MdStar />
					<MdStar />
					<MdStar />
					<MdStar />
				</div>
				<span className="text-gray-400">5/5</span>
			</div>
			<BiSolidQuoteLeft className="absolute right-4 md:right-6 top-6 rotate-180 text-7xl text-gray-700 opacity-50 -mt-2 " />
		</div>
	);
}

export default TestimonialCard;
