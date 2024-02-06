import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import RootLayout from "./RootLayout";
import NoPage from "../components/NoPage";
import AboutMe from "../components/AboutMe";
import AllProjects from "../components/AllProjects";
import ProjectDetail from "../components/ProjectDetail";

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<RootLayout />}>
				<Route path="/" index element={<App />} />
			</Route>
			<Route path="/about_me" element={<AboutMe />} />
			<Route path="/all_projects" element={<AllProjects />} />
			<Route path="/project_details" element={<ProjectDetail />} />
			<Route path="/*" element={<NoPage />} />
		</Route>,
	),
);
