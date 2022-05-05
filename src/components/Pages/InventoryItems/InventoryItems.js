import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import "./InventoryIems.css";

const InventoryItems = () => {
  const [inventories, setInventories] = useInventories();
  return (
    <div className="background">
      <h2 className="inv-title"> INVENTORIES</h2>
      <div className="inventories">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <div className="manage-div">
        <Link to="/manageinventories">
          <button className="manage-btn">Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryItems;
