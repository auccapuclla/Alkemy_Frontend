import { useState } from "react";
import axios from "axios";
import Plate from "./Plate";
const BASEURL = "https://api.spoonacular.com/recipes/";
const APIKEY = "c03cbc60ce094302945018098a8ba55a";
export default function Search() {
  const [search, setSearch] = useState("");
  const searchDishes = (searchText) => {
    console.log(
      BASEURL + "complexSearch?query=" + searchText + "&apiKey=" + APIKEY
    );
    return BASEURL + "complexSearch?query=" + searchText + "&apiKey=" + APIKEY;
  };
  const [menu, setMenu] = useState([]);
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    axios.get(searchDishes(search)).then((data) => setMenu(data.data.results));
  };
  console.log(search);
  return (
    <div className="search">
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          ></input>
        </form>
      </div>

      {menu.length ? (
        menu.map((dish) => (
          <Plate
            key={dish.id}
            id={dish.id}
            title={dish.title}
            image={dish.image}
          />
        ))
      ) : (
        <div> es falso </div>
      )}
    </div>
  );
}
