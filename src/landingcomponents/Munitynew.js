import { Slides } from "./Slides";
import Slide1 from "../images/Slidebg-1.jpg";
import Slide2 from "../images/Slidebg-2.jpg";
import Slide3 from "../images/Slidebg-3.jpg";

export const Munitynew = () => {

  const slideData = [
    {
      index: 0,
      headline: "Slide 1",
      src: Slide1, // Replace with your image URL
      button: "Learn More",
    },
    {
      index: 1,
      headline: "Slide 2",
      src: Slide2, // Replace with your image URL
      button: "Explore",
    },
    {
      index: 2,
      headline: "Slide 3",
      src: Slide3, // Replace with your image URL
      button: "Get Started",
      backgroundColor: "blue", // Replace with your desired background color
    },
    // Add more slides as needed
  ];

  return (
    <div className="Munitynew">
      <div className="topTitle">
        <div id="line"></div>
        <div>
          <div className="text">
            <span className="title title1">New In</span>{" "}
            <span className="title title2">MUNITY</span>{" "}
          </div>
        </div>
        <div id="line"></div>
      </div>
      <div className="bottomImg">
        <div className="daoImg">
          <Slides slides={slideData} heading="Example Slider" />
        </div>
        <div className="rightText">
          <div>
            <span className="type1 lgText">
              MUNITY{" "}
              <span className="type2 lgText">
                Community January 2023 Update
              </span>
            </span>
          </div>
          <div>
            <span className="type3">
              This article will cover some of the major milestones accomplished
              by the development team in recent months, as well as some exciting
              new features being added to the game. Updates on features,
              timelines, staking and more!
            </span>
          </div>
          <div>
            <div className="bottomBtn">
              Read Now{" "}
              <span>
                <i className="bi bi-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
