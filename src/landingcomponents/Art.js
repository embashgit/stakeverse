import ArtImg from "../images/Art.png";
import "bootstrap-icons/font/bootstrap-icons.css";
export const Art = () => {

  return (
    <div className="Art">
        <div className="topTitle">
          <div id="line1"></div>
          <div>
            <div className="text">
              <span className="title title1">
                WE ARE
                <span className="title title2"> HUNGRI </span> GAMES
              </span>
            </div>
          </div>

          <div id="line2"></div>
        </div>
      <div className="bottomImg">
        <div className="rightText">
            <div>
              <span className="type2 lgText">
                <span className="type1 lgText">MUNITY</span> Studios specializes
                in creating high-quality 3D art and animations.
              </span>
            </div>
            <div>
              <span className="type3">
                Since 2019, our seasoned team with 25+ years of management
                experience has been at the forefront of EMEA and Asia gaming.
                With our motto, "Feed Your Gaming Soul," we're your gateway to
                the immersive world of web3 gaming.
              </span>
            </div>
            <div>
              <div className="bottomBtn">
                Visit Hungri Games
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
        </div>
          <div
            className="daoImg"
            style={{
              backgroundImage: `url(${ArtImg})`,
            }}
          ></div>
      </div>
    </div>
  );
};
