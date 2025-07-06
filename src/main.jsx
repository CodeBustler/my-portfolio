import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// ROUTER
import { routes } from "./router/routes";
import { RouterProvider } from "react-router-dom";

// FREELANCE PROJECTS _ VIDEO PREVIEWS
import abPreview from "./assets/project_previews/freelanceProjects/ab.mp4";
import srsPreview from "./assets/project_previews/freelanceProjects/srs.mp4";

// SIDE PROJECTS _VIDEO PREVIEWS
import bmPreview from "./assets/project_previews/sideProjects/bm.mp4";
import epicPreview from "./assets/project_previews/sideProjects/epic.mp4";
import imageSearchEnginePreview from "./assets/project_previews/sideProjects/imageSearchEngine.mp4";
import infinityImageSliderPreview from "./assets/project_previews/sideProjects/infinityImageSlider.mp4";
import tributePreview from "./assets/project_previews/sideProjects/tribute.mp4";
import htmlCheatsheetPreview from "./assets/project_previews/sideProjects/htmlCheatsheet.mp4";
import portfolioPreview from "./assets/project_previews/sideProjects/portfolio.mp4";
import qrCodePreview from "./assets/project_previews/sideProjects/qrCode.mp4";
import todoListPreview from "./assets/project_previews/sideProjects/todoList.mp4";
import movieSearchPreview from "./assets/project_previews/sideProjects/movieSearch.mp4";

// MINI PROJECTS _VIDEO PREVIEW
import calcPreview from "./assets/project_previews/miniProjects/calc.mp4";
import cbPreview from "./assets/project_previews/miniProjects/cb.mp4";
import checklistPreview from "./assets/project_previews/miniProjects/checklist.mp4";
import dicePreview from "./assets/project_previews/miniProjects/dice.mp4";
import diwaliPreview from "./assets/project_previews/miniProjects/diwali.mp4";
import emojiPreview from "./assets/project_previews/miniProjects/emoji.mp4";
import flipCardsPreview from "./assets/project_previews/miniProjects/flipCards.mp4";
import formValidationPreview from "./assets/project_previews/miniProjects/formValidation.mp4";
import googlePreview from "./assets/project_previews/miniProjects/google.mp4";
import gptPreview from "./assets/project_previews/miniProjects/gpt.mp4";
import hostingerPreview from "./assets/project_previews/miniProjects/hostinger.mp4";
import musicPlayerPreview from "./assets/project_previews/miniProjects/musicPlayer.mp4";
import netflixPreview from "./assets/project_previews/miniProjects/netflix.mp4";
import notePreview from "./assets/project_previews/miniProjects/note.mp4";
import productLandingPreview from "./assets/project_previews/miniProjects/productLanding.mp4";
import skillBarPreview from "./assets/project_previews/miniProjects/skillBar.mp4";
import tipPreview from "./assets/project_previews/miniProjects/tip.mp4";
import edgeVideo from "./assets/project_previews/edgeVideo.mp4"
import bingVideo from "./assets/project_previews/bingVideo.mp4"

export const MyContext = React.createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider
      value={{
        edgeVideo,
        bingVideo,
        // FREELANCE PROJECTSs
        abPreview,
        srsPreview,
        // SIDE PROJECTS
        bmPreview,
        epicPreview,
        imageSearchEnginePreview,
        infinityImageSliderPreview,
        tributePreview,
        htmlCheatsheetPreview,
        portfolioPreview,
        qrCodePreview,
        todoListPreview,
        movieSearchPreview,
        // MINI PROJECTS
        calcPreview,
        cbPreview,
        checklistPreview,
        dicePreview,
        diwaliPreview,
        emojiPreview,
        flipCardsPreview,
        formValidationPreview,
        googlePreview,
        gptPreview,
        hostingerPreview,
        musicPlayerPreview,
        netflixPreview,
        notePreview,
        productLandingPreview,
        skillBarPreview,
        tipPreview,
      }}
    >
      <RouterProvider router={routes} />
    </MyContext.Provider>
  </React.StrictMode>,
);
