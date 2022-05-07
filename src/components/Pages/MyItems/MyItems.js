import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `https://quiet-oasis-81679.herokuapp.com/userItem?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, [user]);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure to delete this?");

    if (proceed) {
      const url = `https://quiet-oasis-81679.herokuapp.com/userItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = userItems.filter((userItem) => userItem._id !== id);
          setUserItems(remaining);
        });
    }
  };

  return (
    <div>
      <h2>My Items {userItems.length}</h2>
      {userItems.map((userItem) => (
        <div key={userItem._id}>
          <div className="flex manage-table">
            <img src={userItem.img} alt="" />
            <p>{userItem.name}</p>
            <p>{userItem.quantity}</p>
            <p>${userItem.price}</p>
            <p>{userItem.supplier}</p>
            <button
              onClick={() => handleDeleteItem(userItem._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
