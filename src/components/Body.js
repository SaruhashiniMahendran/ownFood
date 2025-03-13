import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import FOOD_DATA from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
// https://corsproxy.io/?url=

const Body = () => {
  // console.log(FOOD_DATA);
  const [resData, setRestData] = useState(FOOD_DATA);
  const [rating, setRating] = useState("");

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <SearchBar data={FOOD_DATA} />
        <input
          type="text"
          placeholder="Search for food..."
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() => {
            const filterData = resData.filter((res) => res.rating > rating);
            setRestData(filterData);
          }}>
          filter
        </button>
        <button
          onClick={() => {
            setRestData(FOOD_DATA);
            setRating("");
          }}>
          clear
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
