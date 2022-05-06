import React from "react";
import useInventories from "../../../hooks/useInventories";
import "./ManageAllInventory.css";

const ManageAllInventory = ({ inventory }) => {
    const [inventories, setInventories] = useInventories()
  const { _id, img, name, quantity, price, supplier } = inventory;

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure to delete this?");

    if (proceed) {
      const url = `http://localhost:5000/inventory/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          console.log(remaining);
          setInventories(remaining);
        });
    }
  };

  return (
    <div>
      <div className="flex manage-table">
        <img src={img} alt="" />
        <p>{name}</p>
        <p>{quantity}</p>
        <p>${price}</p>
        <p>{supplier}</p>
        <button onClick={() => handleDeleteItem(_id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageAllInventory;
