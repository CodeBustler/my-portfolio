import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import ProjectDetail from "../components/ProjectDetail";
import RootLayout from "./RootLayout";
import PastWork from "../components/PastWork";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import NoPage from "../components/NoPage";
import HireMe from "../components/HireMe";
import AboutMe from "../components/AboutMe";

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<RootLayout />}>
				<Route path="/" index element={<App />} />
				<Route path="/about_me" element={<AboutMe />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project_details" element={<ProjectDetail />} />
				<Route path="/past_work" element={<PastWork />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/hire_me" element={<HireMe />} />
			</Route>
			<Route path="/*" element={<NoPage />} />
		</Route>,
	),
);
