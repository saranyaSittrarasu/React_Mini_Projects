import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Accordion from "./components/Accordion/Accordion";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import RandomColorGenrator from "./components/RandomColorGenerator/RandomColorGenerator";
import NotFound from "./components/NotFound";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/loadmoredata" element={<LoadMoreData />} />
        <Route path="/randomcolorgenerator" element={<RandomColorGenrator />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </>
  );
};

export default AppRouter;