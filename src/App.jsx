import React from "react";
import Navigation from "./components/navigation-bar/nav";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/404";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/"></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
};

export default App;
