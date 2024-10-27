import React from "react";
import on from "../../assets/show/0.gif";
import tw from "../../assets/show/8.gif";
import th from "../../assets/show/10.gif";
import fo from "../../assets/show/3.gif";
import fi from "../../assets/show/4.gif";
import si from "../../assets/show/5.gif";
import se from "../../assets/show/6.gif";

import { Link } from "react-router-dom";
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
const Results = () => {
  return (
    <div className="results">
      <div className="container">
        <h2 className="h1">Showing Results</h2>
        <div className="results_cards">
          {resultsDate.map((item, index) => (
            <Link className="result_card" key={index} to={`/${index}`}>
              <div className="result_img">
                <img src={item.ResultImg} alt="" />
              </div>
              <div className="result_text">
                <span className="back">back</span>
                <span className="late">late</span>
                <h3>{item.ResulteName}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
