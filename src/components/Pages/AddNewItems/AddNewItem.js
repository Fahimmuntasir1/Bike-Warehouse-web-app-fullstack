import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewItem.css";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className=" add-new">
      <h2>Add Items</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          placeholder="Name here"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          required
          placeholder="Supplier name here"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          required
          placeholder="Price example: (745)"
          type="number"
          {...register("price")}
        />
        <input
          required
          placeholder="Quantity example: (12)"
          type="number"
          {...register("quantity")}
        />
        <input
          required
          placeholder="Image-URL example: (https://i.ibb.co/9ZXXHt4.jpg)"
          type="text"
          {...register("img")}
        />
        <textarea
          required
          placeholder="Description"
          {...register("description")}
        />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddNewItem;
