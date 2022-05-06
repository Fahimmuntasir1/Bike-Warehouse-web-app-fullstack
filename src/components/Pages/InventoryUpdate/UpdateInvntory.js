import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateInvntory.css";

const UpdateInvntory = () => {
  const { _id } = useParams();
  const [inventory, setInventory] = useState({});
  const { _id: id, name, description, price, quantity, supplier } = inventory;

  const [deliverQuantity, setDeliverQuantity] = useState(0);

  const handleQuantityDecrease = (id) => {
    const decrease = quantity - 1;
    const update = { decrease };
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setDeliverQuantity(deliverQuantity + 1);
        }
      });
    console.log(decrease);
  };
  const increaseQuantity = (id, decrease) => {
    const update = { decrease };
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setDeliverQuantity(deliverQuantity + 1);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.quantity.value);
    const newQuantity = quantity + value;
    increaseQuantity(_id, newQuantity);
    e.target.reset();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${_id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [deliverQuantity]);
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
        <button
          onClick={() => handleQuantityDecrease(_id)}
          className="update-btn"
        >
          Delivered
        </button>
      </div>

      <form onSubmit={handleSubmit} className="quantity text-center my-5">
        <h4>Add Quantity</h4>
        <input
          className="number-input"
          type="number"
          name="quantity"
          placeholder="add quantity"
        />
        <input className="update-btn mx-2" type="submit" value="Add quantity" />
        
      </form>
    </div>
  );
};

export default UpdateInvntory;
