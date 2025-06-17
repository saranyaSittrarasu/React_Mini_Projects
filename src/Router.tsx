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
import QrCoreGenerator from "./components/QRCodeGenerator/QrCoreGenerator";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LightAndDark from "./components/LightAndDark/LightAndDark";
import CustomTab from "./components/CustomTab/CustomTab";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import Pagination from "./components/Pagination/Pagination";
import DigitalClockAndStopWatch from "./components/DigitalClockAndStopWatch/DigitalClockAndStopWatch";
import FileUpload from "./components/FileUpload/FileUpload";
import FormValidation from "./components/FormValidation/FormValidation";
import DragAndDropList from "./components/DragandDrop/DragAndDropList";
import DebounceAndThrottle from "./components/DebounceandThrottle/DebounceAndThrottle";

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
        <Route path="/qrcode" element={<QrCoreGenerator />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/lightdark" element={<LightAndDark />} />
        <Route path="/customtab" element={<CustomTab />} />
        <Route path="/loadmorebutton" element={<LoadMoreButton />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/digitalclock" element={<DigitalClockAndStopWatch />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/formvalidator" element={<FormValidation />} />
        <Route path="/dragdrop" element={<DragAndDropList />} />
        <Route path="/debounceandthrottle" element={<DebounceAndThrottle />} />
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </>
  );
};

export default AppRouter;
