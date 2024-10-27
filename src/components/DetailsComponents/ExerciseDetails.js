import React from "react";
import resultImg from "../../assets/gym.png";
import waist from "../../assets/body-part.png";
import abs from "../../assets/equipment.png";
import bodyweight from "../../assets/target.png";
import on from "../../assets/show/0.gif";
import tw from "../../assets/show/8.gif";
import th from "../../assets/show/10.gif";
import fo from "../../assets/show/3.gif";
import fi from "../../assets/show/4.gif";
import si from "../../assets/show/5.gif";
import se from "../../assets/show/6.gif";
const resultsDate = [
  {
    ResultImg: on,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: tw,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: th,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: fo,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: fi,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: si,
    ResulteName: "Archer pull Up",
  },
  {
    ResultImg: se,
    ResulteName: "Archer pull Up",
  },
];
const ExerciseDetails = ({ id }) => {
  const idDe = id;
  const exer = resultsDate[parseInt(idDe)];
  console.log(exer);
  return (
    <div className="e_details">
      <div className="container content">
        <div className="e_img">
          <img src={exer.ResultImg} alt="" />
        </div>
        <div className="e_detail">
          <h2 className="h1">{exer.ResulteName}</h2>
          <p className="lead">description of exercises</p>
          <div className="plays">
            <div className="play_one">
              <span className="icon">
                {" "}
                <img src={waist} alt="" />{" "}
              </span>
              <span className="desc">Waist</span>
            </div>
            <div className="play_one">
              <span className="icon">
                {" "}
                <img src={abs} alt="" />
              </span>
              <span className="desc">Abs</span>
            </div>
            <div className="play_one">
              <span className="icon">
                <img src={bodyweight} alt="" />
              </span>
              <span className="desc">Body Weight</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
