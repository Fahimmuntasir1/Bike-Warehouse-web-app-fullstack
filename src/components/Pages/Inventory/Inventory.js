import React from "react";
import "./inventory.css";

const Inventory = ({ inventory }) => {
  const { name, price, description, img,quantity, supplier  } = inventory;
  return (
    <div className="inventory">
      <img src={img} alt="" />
      <div className="card-content">
      <h3>{name}</h3>
      <span>Price: {price}</span>
      <p>{description}</p>
      <button>Update</button>
      </div>
    </div>
  );
};

export default Inventory;
