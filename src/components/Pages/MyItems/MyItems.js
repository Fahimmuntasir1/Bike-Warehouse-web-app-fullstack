import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/userItem?email=${email}`)
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, [user]);

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure to delete this?");

    if (proceed) {
      const url = `http://localhost:5000/userItem/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
            const remaining = userItems.filter(
              (userItem) => userItem._id !== id
            );
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