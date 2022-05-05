import React from "react";
import "./ManageAllInventory.css";

const ManageAllInventory = ({ inventory }) => {
  const { img, name, quantity, price, supplier } = inventory;
  return (
    <div>
      <div className="flex manage-table">
        <img src={img} alt="" />
        <p>{name}</p>
        <p>{quantity}</p>
        <p>${price}</p>
        <p>{supplier}</p>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ManageAllInventory;
