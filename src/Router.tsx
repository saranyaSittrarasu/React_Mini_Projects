import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Accordion from "./components/Accordion/Accordion";
import SearchAutoComplete from "./components/SearchAutoComplete/SearchAutoComplete";
import RandomColorGenrator from "./components/RandomColorGenerator/RandomColorGenerator";
import NotFound from "./components/NotFound";
import WeekandDaysCalculator from "./components/WeekandDaysCalculator/WeekandDaysCalculator";
import StarRating from "./components/StarRating/StarRating";
import ModalHomePage from "./components/ModalPopUp/ModalHomePage";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/searchautocomplete" element={<SearchAutoComplete />} />
        <Route path="/randomcolorgenerator" element={<RandomColorGenrator />} />
        <Route
          path="/monthanddatecalculator"
          element={<WeekandDaysCalculator />}
        />
        <Route path="/starrating" element={<StarRating />} />
        <Route path="/showmodal" element={<ModalHomePage />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </>
  );
};

export default AppRouter;
