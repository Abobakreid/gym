import React from "react";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <>
      <div className="head container content">
        <div className="detail">
          <h2 className="red">Fitness Club</h2>
          <h2>
            Sweat, Smail
            <br /> and repeat
          </h2>
          <p className="lead">Check Out The Most Effective Exercises</p>
          <button className="btn">Explore Exercises</button>
        </div>
        <div className="img">
          <img src={banner} alt="" height={"600px"} loading={"lazy"} />
        </div>
        <h1 className="Banner_title">Exercises</h1>
      </div>
    </>
  );
};

export default Banner;
