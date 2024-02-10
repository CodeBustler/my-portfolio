import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// ROUTER
import { routes } from "./router/routes";
import { RouterProvider } from "react-router-dom";

// FREELANCE PROJECTS _ VIDEO PREVIEWS
import abPreview from "./assets/project_previews/ab.mp4";
import srsPreview from "./assets/project_previews/srs.mp4";

// SIDE PROJECTS _VIDEO PREVIEWS
import bmPreview from "./assets/project_previews/bm.mp4";
import epicPreview from "./assets/project_previews/epic.mp4";
import imageSearchEnginePreview from "./assets/project_previews/imageSearchEngine.mp4";
import infinityImageSliderPreview from "./assets/project_previews/infinityImageSlider.mp4";
import tributePreview from "./assets/project_previews/tribute.mp4";
import htmlCheatsheetPreview from "./assets/project_previews/htmlCheatsheet.mp4";
import portfolioPreview from "./assets/project_previews/portfolio.mp4";
import qrCodePreview from "./assets/project_previews/qrCode.mp4";
import todoListPreview from "./assets/project_previews/todoList.mp4";
import movieSearchPreview from "./assets/project_previews/movieSearch.mp4";

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
        htmlCheatsheetPreview,
        portfolioPreview,
        qrCodePreview,
        todoListPreview,
        movieSearchPreview,
      }}
    >
      <RouterProvider router={routes} />
    </MyContext.Provider>
  </React.StrictMode>,
);
