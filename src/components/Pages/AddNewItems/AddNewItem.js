import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/firebase.init";
import "./AddNewItem.css";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://warehouse-management-webapp.onrender.com/useritem`;
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
        <label className="ml-1 text-secondary" htmlFor="email">
          Add Item For :{" "}
        </label>
        <input
          type="text"
          value={user.email}
          name="email"
          id="email"
          // disabled
          readOnly
          {...register("email")}
        ></input>
        <input
          required
          placeholder="Name here"
          autoComplete="off"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          required
          placeholder="Supplier name here"
          autoComplete="on"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          required
          placeholder="Price example: (745)"
          autoComplete="off"
          type="number"
          {...register("price")}
        />
        <input
          required
          placeholder="Quantity example: (12)"
          autoComplete="off"
          type="number"
          {...register("quantity")}
        />
        <input
          required
          placeholder="Image-URL example: (https://i.ibb.co/9ZXXHt4.jpg)"
          autoComplete="off"
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
      <ToastContainer />
    </div>
  );
};

export default AddNewItem;
