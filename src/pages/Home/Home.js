import React from "react";
import Banner from "./Banner/Banner";
import NewServices from "./NewServices/NewServices";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="my-10">
      <Banner></Banner>
      <Services></Services>
      <NewServices></NewServices>
    </div>
  );
};

export default Home;
