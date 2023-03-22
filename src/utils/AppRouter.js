import React from "react";
import { Route, Routes } from "react-router-dom";
import Agr from "../pages/Agr";
import Cifr from "./../pages/Cifr";
import DetailQuest from "../pages/DetailQuest";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<div>Не найдено</div>} exact={true}></Route>
      <Route path={"agr"} element={<Agr />} exact={true}></Route>
      <Route path={"cifr"} element={<Cifr />} exact={true}></Route>
      <Route path={"cifr/:id"} element={<DetailQuest />} exact={true}></Route>
      {/* тут тебе надо будет добавить уникальный компонент с id, как строчкой выше */}
    </Routes>
  );
};

export default AppRouter;
