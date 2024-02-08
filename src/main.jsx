import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// ROUTER
import { routes } from "./router/routes";
import { RouterProvider } from "react-router-dom";
// VIDEO PREVIEWS
import bmPreview from "./assets/project_previews/bm.mp4";
import epicPreview from "./assets/project_previews/epic.mp4";
import imageSearchEnginePreview from "./assets/project_previews/imageSearchEngine.mp4";
import infinityImageSliderPreview from "./assets/project_previews/infinityImageSlider.mp4";
import tributePreview from "./assets/project_previews/tribute.mp4";
import abPreview from "./assets/project_previews/ab.mp4";
import srsPreview from "./assets/project_previews/srs.mp4";

export const MyContext = React.createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider
      value={{
        bmPreview,
        epicPreview,
        imageSearchEnginePreview,
        infinityImageSliderPreview,
        tributePreview,
        abPreview,
        srsPreview,
      }}
    >
      <RouterProvider router={routes} />
    </MyContext.Provider>
  </React.StrictMode>,
);
