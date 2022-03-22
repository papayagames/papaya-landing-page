import React from "react";
import "./Header.css";
import Arrow from "../images/arrow.svg";
import Telegram from "../images/telegram.svg";
import Twitter from "../images/twitter.svg";
import Linkedin from "../images/Linkedin.svg";
import Facebook from "../images/facebook.svg";
import mouse from "../images/mouse.svg";
import walletcopy from "../images/walletcopy.svg";
import metamask from "../images/metamask.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="headermain">
        <div>
          <h4 className="hh4">
            Video <span className="hcolor">GAME TOKEN</span> on Blockchain
          </h4>
          <h1 className="hh1">
            <span className="hcolor">Publish your</span>
            <br />
            <span className="hcolor"> Game</span> in under
            <br /> <span className="hcolor">15 minutes.</span>
          </h1>
          <p className="hp">
            DeFinitive Edition of Game Publishing Platform.
            <br />
            P2P swap with video games between players. <br />
            Own the game like never before!
          </p>
          <div className="hbtncon">
            <button className="hbtn1">MORE ABOUT GAME TOKEN</button>
            <button className="hbtn2">
              <div className="hcon2">
                WHITEPAPER <img src={Arrow} alt="" className="arrow" />
              </div>
            </button>
          </div>
        </div>
        <div className="hsmi">
          <div className="hsmi2">
            <img src={Telegram} alt="icons" className="hicons" />
            <br />
            <img src={Twitter} alt="icons" className="hicons" />
            <br />
            <img src={Linkedin} alt="icons" className="hicons" />
            <br />
            <img src={Facebook} alt="icons" className="hicons" />
          </div>
        </div>
      </div>

      <div className="hdetails">
        <div className="firstdiv">
          <div className="hcon3">
            <img src={mouse} alt="mouse" style={{marginRight:"0.6vw"}}/>  Scroll to
            <span className="hcolor"> learn more</span>
          </div>
        </div>
        <div className="seconddiv">
          <p className="psecond">
            All Gamers: <span className="hcolor"> 51,265</span>
          </p>
          <div>
            <div className="hcon4">
              Contract: # 0x2ce...BA9f <img src={walletcopy} alt="" />
            </div>
          </div>
          <button className="hmbtn">
            <div className="hmbtncon">
              <img src={metamask} alt="" /> ADD # TO YOUR WALLET
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
