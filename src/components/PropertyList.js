import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext.js";

function PropertyList({ properties }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.bedrooms} Bedrooms</p>
          <p>{property.location}</p>
          <p>${property.price} per night</p>
          <button onClick={() => addToCart(property)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
