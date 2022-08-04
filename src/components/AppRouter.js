import React, { useMemo, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Mainmenu from "../pages/Mainmenu/Mainmenu";
import Multiplayer from "../pages/Multiplayer/Multiplayer";
import Packages from "../pages/Packages/Packages";
import Quickgame from "../pages/Quickgame/Quickgame";
import Registration from "../pages/Registration/Registration";
import Settings from "../pages/Settings/Settings";

const AppRouter = () => {
  const isAuth = useMemo(() => !!localStorage.getItem("access_token"));
  return (
    isAuth
      ? <Routes>
      <Route path="/mainmenu" element={<Mainmenu />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/game" element={<Game />} />
      <Route path="/quickgame" element={<Quickgame />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Registration />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    : <Routes>
      <Route path="/quickgame" element={<Quickgame />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Registration />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
