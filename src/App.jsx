import React from "react";
import Navigation from "./components/navigation-bar/nav";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
};

export default App;
