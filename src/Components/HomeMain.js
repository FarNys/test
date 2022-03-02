import React from "react";
import "../Styles/HomeMain.scss";
import FeatureComponent from "../Util/FeatureComponent";
import StorageIcon from "@mui/icons-material/Storage";
import SquareSvg from "../Util/SquareSvg";
import CodeIcon from "@mui/icons-material/Code";
import "../Styles/FeatureComponent.scss";
import { Fade, Bounce, AttentionSeeker } from "react-awesome-reveal";
import TopicCard from "../Util/TopicCard";

const HomeMain = () => {
  return (
    <div className="homemain_container">
      {/* <h1>HomeMain</h1> */}

      <div className="homemain_inner">
        <SquareSvg
          fillColorDark="#13bb70"
          fillColorLight="#13bb7077"
          posLeft={false}
        />
        <div className="home_main_header">
          <h5>TOP FEATURES</h5>
          <h2>Build apps fast</h2>
          <p>
            Building self-hosted, customizable, and performant content API has
            never been easier.
          </p>
        </div>
        <div className="feature_item_container">
          {/* SINGLE FEATURE ITEM */}
          <Fade>
            <div className="feature_item_box">
              <div className="feature_item_header">
                <CodeIcon />
                <h3>Code Editor</h3>
              </div>

              <p>
                Forever. The entire codebase is available on GitHub and
                maintained by hundreds of contributors.
              </p>
            </div>
          </Fade>
          {/* SINGLE FEATURE END */}
          <div className="feature_item_box">
            <div className="feature_item_header">
              <StorageIcon />
              <h3>Self-hosted</h3>
            </div>
            <p>
              Don’t give up on data privacy or lock yourself in. Keep control of
              your data and your costs at all time.
            </p>
          </div>
        </div>
        <SquareSvg
          fillColorDark="#ee1b6c"
          fillColorLight="#ee1b6c77"
          posLeft={true}
        />
      </div>
      <TopicCard
        text="Get set up in minutes to build projects in hours instead of weeks."
        title="Drastically shorten your time-to-deploy."
      />
    </div>
  );
};

export default HomeMain;
