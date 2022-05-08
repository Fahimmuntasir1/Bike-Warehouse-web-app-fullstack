import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="my-component">
      <h2 className="text-center title my-5">Why You Choose Us</h2>
      <div className="border"></div>
      <div className="flex justify-around why-us">
        <div className="my-card mx-3 my-5">
          <img src="https://i.ibb.co/nDSJfbJ/like-1.png" alt="" />
          <h2>How We are Different</h2>
          <p>
            We are providing 100% genuine product in Bangladesh. 99% positive
            review buyer. Good deal with buyer. so you can buy from us.
          </p>
        </div>
        <div className="my-card mx-3 my-5">
          <img src="https://i.ibb.co/jJmmC0d/bicycle.png" alt="" />
          <h2>What we are providing</h2>
          <p>
            We are providing 100% genuine product in Bangladesh. 99% positive
            review buyer. Good deal with buyer. so you can buy from us.
          </p>
        </div>
        <div className="my-card mx-3 my-5">
          <img src="https://i.ibb.co/FH0Q4QB/delivery.png" alt="" />
          <h2>Home Delivery in Bangladesh</h2>
          <p>
            We are provide fast home delivery with little cost. You will
            received our products anywhere from Bangladesh.
          </p>
        </div>
        <div className="my-card mx-3 my-5">
          <img src="https://i.ibb.co/X5JckB2/support.png" alt="" />
          <h2>Support and Warranty</h2>
          <p>
            If you buy our products we give you 1 yr Warranty for prts and
            components.You can service your products 10% discounts from us
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
