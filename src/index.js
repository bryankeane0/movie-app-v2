import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes , Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="*" />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
