import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact ";
import InventoryItems from "../InventoryItems/InventoryItems";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <WhyUs />
      <Contact />
    </div>
  );
};

export default Home;
