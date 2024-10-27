import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import logo from "../../assets/gym.png";
import IConRightArrow from "../../assets/right-arrow.png";
import IConleftArrow from "../../assets/left-arrow.png";

const cardsData = [
  {
    LogoImg: logo,
    Title: "All",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
    Title: "leg",
  },
  {
    LogoImg: logo,
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
const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
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

export default Cards;
