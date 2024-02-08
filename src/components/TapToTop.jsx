import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function TapToTop() {
	const [scrollTop, setScrollTop] = useState(0);

	// --------------------------------------------------
	// ***************** TAP TO TOP *****************
	// --------------------------------------------------
	const handleScroll = () => {
		setScrollTop(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		//WHEN COMPONENT UNMOUNTS
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// --------------------------------------------------

	return (
		<div>
			{scrollTop > 700 && (
				<FaArrowUp
					className=" w-10 h-10 bg-yellow-500 p-3 rounded-full shadow-xl fixed bottom-10 right-10 z-50 cursor-pointer text-gray-900 opacity-30 hover:opacity-100 hover:scale-125 transition"
					onClick={() => window.scrollTo(0, 0)}
				/>
			)}
		</div>
	);
}

export default TapToTop;
