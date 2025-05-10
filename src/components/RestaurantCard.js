const RestaurantCard = (props) => {
  //console.log(props.resData.name);
  const { name, cuisine, rating, deliveryTime, image } = props?.resData;
  return (
    <div className="res-card">
      <img className="img" alt="image" src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
