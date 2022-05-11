import "./App.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Plate from "./component/Plate";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./component/Search";
import Dish from "./component/Dish";
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL =
  "https://api.spoonacular.com/recipes/654959/information?apiKey=c03cbc60ce094302945018098a8ba55a";

function App() {
  // const searchId = (recipeId) => {
  //   return BASEURL + recipeId.toString() + "/information?apiKey=" + APIKEY;
  // };
  // const searchDishes = (searchText) => {
  //   return BASEURL + "complexSearch?query=" + searchText + "&apiKey=" + APIKEY;
  // };
  // console.log(search);

  return (
    <Router>
      <div className="App">
        <div> Hotel </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="dish/:id" element={<Dish />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
