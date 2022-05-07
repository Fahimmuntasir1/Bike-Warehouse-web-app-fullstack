import React from "react";
import { Link } from "react-router-dom";
import "./inventory.css";

const Inventory = ({ inventory }) => {
  const { _id, name, price, description, img, quantity, supplier } = inventory;
  return (
    <div id="inventory" className="inventory">
      <img src={img} alt="" />
      <div className="inventory-content">
        <h3>{name}</h3>
        <span>Price: ${price}</span>
        <p>Supplier : {supplier}</p>
        <p>{description}</p>
        <Link to={`/invupdate/${_id}`}>
          <button>Update</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
