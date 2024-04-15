import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container-3">
        <div className="atlas-logo"></div>
        <div className="container-1">
          <img className="vector-2" src="assets/vectors/Vector349_x2.svg" />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="container-2">
          <img
            className="iconprofile-circled"
            src="assets/vectors/IconprofileCircled27_x2.svg"
          />
          <div className="profile">Profile</div>
        </div>
        <div className="container-9">
          <img
            className="iconsettings-profiles"
            src="assets/vectors/IconsettingsProfiles32_x2.svg"
          />
          <span className="goal-settings">Goal Settings</span>
        </div>
        <div className="container-12">
          <img
            className="iconlight-bulb"
            src="assets/vectors/IconlightBulb16_x2.svg"
          />
          <div className="swot-matrix">SWOT Matrix</div>
        </div>
        <div className="container">
          <div className="iconmaps-arrow-diagonal">
            <img className="vector-8" src="assets/vectors/Vector160_x2.svg" />
          </div>
          <div className="strat-mapping">Strat Mapping</div>
        </div>
        <div className="container-5">
          <img
            className="iconcard-wallet"
            src="assets/vectors/IconcardWallet31_x2.svg"
          />
          <div className="bscorecard">B Scorecard</div>
        </div>
        <div className="container-6">
          <div className="group-12">
            <img className="vector-14" src="assets/vectors/Vector579_x2.svg" />
          </div>
          <div className="group-11">
            <span className="report-analysis">Report Analysis</span>
          </div>
        </div>
        <div className="container-16">
          <div className="group-13">
            <img
              className="iconclipboard-check"
              src="assets/vectors/IconclipboardCheck29_x2.svg"
            />
          </div>
          <div className="group-10">
            <span className="evaluation">Evaluation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
