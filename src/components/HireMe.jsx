import { RiMegaphoneFill } from "react-icons/ri";

function HireMe() {
	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="hire_me">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left flex items-end gap-3">
				<RiMegaphoneFill className="text-gray-500 mb-1" />
				Hire Me
			</h1>
			{/*----------------------------------------------*/}
			{/**************** FORM CONTAINER ****************/}
			{/*----------------------------------------------*/}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
				<form
					action="https://formsubmit.co/mallikarjun.mavnoor@gmail.com"
					method="POST"
					className="text-lg text-gray-200 flex flex-col gap-5"
				>
					<input
						type="text"
						name="Name"
						required
						placeholder="Name"
						className="bg-[#1D2430] rounded-md px-5 py-3 "
					/>
					<input
						type="email"
						name="Email"
						required
						placeholder="Email Id"
						className="bg-[#1D2430] rounded-md px-5 py-3 "
					/>{" "}
					<input
						type="tel"
						name="Phone"
						placeholder="Phone (Optional)"
						className="bg-[#1D2430] rounded-md px-5 py-3 "
					/>
					<textarea
						name="Message"
						required
						placeholder="Message"
						cols="30"
						rows="5"
						className="bg-[#1D2430] rounded-md px-5 py-4 "
					></textarea>
					<div className="flex items-center  gap-5  mt-2">
						<button
							type="submit"
							className=" px-10 py-2 rounded-lg bg-green-600 active:bg-green-700  whitespace-nowrap transition w-[50%] md:w-auto"
						>
							Submit
						</button>
						<button
							type="reset"
							className=" px-10 py-2 rounded-lg bg-gray-600 active:bg-gray-700  whitespace-nowrap w-[50%] md:w-auto"
						>
							Reset
						</button>
					</div>
				</form>
				{/*----------------------------------------------*/}
				{/****************** GOOGLE MAP ******************/}
				{/*----------------------------------------------*/}
				<div className="mapouter">
					<div className="gmap_canvas rounded-xl">
						<div style={{ width: "100%" }}>
							<iframe
								width="100%"
								height="700"
								frameBorder="0"
								scrolling="no"
								marginHeight="0"
								marginWidth="0"
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
