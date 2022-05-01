import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import "./InventoryIems.css";

const InventoryItems = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("inventory.json")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <h2 className="inv-title"> INVENTORIES</h2>
      <div className="inventories">
        {inventories.map((inventory) => (
          <Inventory key={inventory.id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
