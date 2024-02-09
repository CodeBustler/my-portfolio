import { IoMdThumbsUp } from "react-icons/io";
import ab from "../assets/ab.png";
import shantanu from "../assets/shantanu.png";
import TestimonialCard from "./TestimonialCard";

//----------------------------------------------------
function Testimonials() {
	return (
		<div className="container mx-auto pt-24 md:pt-28 " id="testimonials">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-end gap-3">
				<IoMdThumbsUp className="text-gray-500  mb-1" />
				Client Testimonials
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
				<TestimonialCard
					message={
						"Exceptional website development services! Mallikarjun exceeded my expectations with their professionalism, attention to detail, and timely delivery. Highly recommended for anyone seeking top-notch web solutions."
					}
					clientName={"Shantanu Brahma"}
					desig={"Founder & CEO"}
					org={" AB Sevice Private Limited"}
					avatar={shantanu}
					logo={ab}
					officialUrl={"https://www.ahambhramhasmi.com/"}
				/>
			</div>
		</div>
	);
}

export default Testimonials;
