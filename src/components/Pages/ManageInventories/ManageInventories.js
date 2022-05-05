import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../../hooks/useInventories";
import ManageAllInventory from "../ManageAllInventory/ManageAllInventory";

const ManageInventories = () => {
  const [inventories] = useInventories();

  return (
    <div>
      {inventories.map((inventory) => (
        <ManageAllInventory
          key={inventory._id}
          inventory={inventory}
        ></ManageAllInventory>
      ))}

      <div className="text-center">
        <Link to="/">
          <button className="manage-btn">Add new items</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
