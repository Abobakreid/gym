import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import IConRightArrow from "../../assets/right-arrow.png";
import IConleftArrow from "../../assets/left-arrow.png";

import on from "../../assets/show/0.gif";
import tw from "../../assets/show/8.gif";
import th from "../../assets/show/10.gif";
import fo from "../../assets/show/3.gif";
import fi from "../../assets/show/4.gif";
import si from "../../assets/show/5.gif";
import se from "../../assets/show/6.gif";
import ni from "../../assets/show/8.gif";
import el from "../../assets/show/10.gif";
import to from "../../assets/show/11.gif";

const cardsData = [
  {
    LogoImg: on,
    Title: "leg",
  },
  {
    LogoImg: tw,
    Title: "leg",
  },
  {
    LogoImg: th,
    Title: "leg",
  },
  {
    LogoImg: fo,
    Title: "leg",
  },
  {
    LogoImg: fi,
    Title: "leg",
  },
  {
    LogoImg: si,
    Title: "leg",
  },
  {
    LogoImg: se,
    Title: "leg",
  },
  {
    LogoImg: ni,
    Title: "leg",
  },
  {
    LogoImg: el,
    Title: "leg",
  },
  {
    LogoImg: to,
    Title: "leg",
  },
];
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <img src={IConleftArrow} alt="" />
    </div>
  );
}
function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <img src={IConRightArrow} alt="" />
    </div>
  );
}
const ExerciseEquipment = () => {
  return (
    <div className="e_equipment">
      <div className="container">
        <h2 className="h1">Similar Equipment Exercises</h2>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          style={{ display: "grid" }}
        >
          {cardsData.map((item, index) => (
            <div key={index} className="card">
              <div className="card_img">
                <img src={item.LogoImg} alt="" />
              </div>
              <h4 className="card_text">{item.Title}</h4>
            </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default ExerciseEquipment;
