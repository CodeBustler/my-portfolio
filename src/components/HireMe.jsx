import React from "react";
import { RiMegaphoneFill } from "react-icons/ri";

function HireMe() {
	return (
		<div className="container mx-auto pt-28 min-h-[100vh]" id="hire_me">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
				<RiMegaphoneFill className="text-gray-500 mb-1" />
				Hire Me
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
				<div className="text-lg text-gray-200 flex flex-col gap-5">
					<input
						type="text"
						placeholder="Name"
						className="bg-[#1D2430] rounded-md px-5 py-3 "
					/>
					<input
						type="email"
						placeholder="Email Id"
						className="bg-[#1D2430] rounded-md px-5 py-3 "
					/>
					<textarea
						name="message"
						placeholder="Message"
						cols="30"
						rows="7"
						className="bg-[#1D2430] rounded-md px-5 py-4 "
					></textarea>
					<div className="flex items-center gap-5  mt-2">
						<button className=" px-10 py-2 rounded-lg bg-green-600 active:bg-green-700  whitespace-nowrap transition">
							Submit
						</button>
						<button className=" px-10 py-2 rounded-lg bg-gray-600 active:bg-gray-700  whitespace-nowrap">
							Reset
						</button>
					</div>
				</div>
				{/*GOOGLE-MAP */}
				<div className="mapouter">
					<div className="gmap_canvas rounded-xl">
						<div style={{ width: "100%" }}>
							<iframe
								width="100%"
								height="700"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hyderabad+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HireMe;
