import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import "./InventoryIems.css";

const InventoryItems = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="background">
      <h2 className="inv-title"> INVENTORIES</h2>
      <div className="inventories">
        {inventories.slice(0,6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
