import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Record from "../page/Record";
import Play from "../page/Play";
import Setting from "../page/Setting";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/record" element={<Record />} />
      <Route path="/play" element={<Play />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default Routers;
