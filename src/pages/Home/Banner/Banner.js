import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className=" relative">
        <div className="gradiantImg">
          <img
            className=" rounded-xl"
            src="https://i.ibb.co/XJBnPdm/sports-tools.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="absolute top-1/4 text-white text-6xl font-bold left-10">
            Sports Photography <br /> Everything You <br /> Need to Know!
          </h1>
          <p className="absolute bottom-1/4 w-1/2 left-10 text-white">
            Sports photography is a type of photography that covers every sport
            and sporting event capturing the action of a game and behind the
            scenes of the players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
