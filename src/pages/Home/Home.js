import React from "react";
import Banner from "./Banner/Banner";
import NewSection from "./NewSection/NewSection";
import NewServices from "./NewServices/NewServices";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="my-10">
      <Banner></Banner>
      <Services></Services>
      <NewServices></NewServices>
      <NewSection></NewSection>
    </div>
  );
};

export default Home;
