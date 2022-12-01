import React from "react";
import HeroClients from "../components/client/clients/HeroClients";
import Reviews from "../components/client/clients/Reviews";
import Success from "../components/client/clients/Success";
import Testimonial from "../components/client/clients/Testimonial";

const Clients = () => {
  return (
    <div className="pt-10">
      <HeroClients />
      <Success />
      {/* <Reviews /> */}
      {/* <Testimonial /> */}
    </div>
  );
};

export default Clients;
