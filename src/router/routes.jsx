import App from "../App";
import Projects from "../components/Projects";
import ProjectDetail from "../components/ProjectDetail";
import RootLayout from "./RootLayout";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<RootLayout />}>
				<Route path="/" index element={<App />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project_detail" element={<ProjectDetail />} />
			</Route>
		</Route>,
	),
);
