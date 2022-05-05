import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateInvntory.css";

const UpdateInvntory = () => {
  const { _id } = useParams();
  const [inventory, setInventory] = useState({});
  const { _id: id, name, description, price, quantity, supplier } = inventory;

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${_id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-4">Showing your product</h2>
      <div className="card">
        <img src={inventory.img} alt="" />
        <div className="card-description">
          <h4>ID : {id}</h4>
          <h2>Name : {name}</h2>
          <p>Price : ${price}</p>
          <p>Quantity : {quantity}</p>
          <p>supplier : {supplier}</p>
          <p>Description : {description}</p>
        </div>
        <button className="update-btn">Delivered</button>
      </div>

      <div className="quantity text-center my-5">
        <h4>Add Quantity</h4>
        <input className="number-input" type="number" placeholder="add quantity" />
        <button className="update-btn mx-2">
          <input type="button" value="Add quantity" />
        </button>
      </div>
    </div>
  );
};

export default UpdateInvntory;
