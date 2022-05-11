import { useState } from "react";
import { useParams } from "react-router-dom";

const BASEURL = "https://api.spoonacular.com/recipes/";
const APIKEY = "c03cbc60ce094302945018098a8ba55a";
export default function Search() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState([]);
  let { id } = useParams();
  console.log(id);
  const searchDishes = (searchText) => {
    return BASEURL + "complexSearch?query=" + searchText + "&apiKey=" + APIKEY;
  };
  return <div>dasdas</div>;
}
