import { React, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  const resId = useParams();
  useEffect(() => {});

  const fetchMenu = async () => {
    const data = await fetch("");

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.resName}</h1>
      <h2>{resInfo.menu}</h2>
      <ul>
        {json.data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
