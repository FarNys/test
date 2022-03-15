import React from "react";
import features_Svg from "../../assets/svg/features_svg.svg";
import "./Features.scss";
import ButtonEffect from "../../Util/ButtonEffect";
import {
  AttentionSeeker,
  Bounce,
  Fade,
  Slide,
  Zoom,
} from "react-awesome-reveal";
import FeaturesCards from "./FeaturesCards";
import FeaturesSection from "./FeaturesSection";
import FeaturesContent from "./FeaturesContent";
import FeaturesGrid from "./FeaturesGrid";
import FeaturesScroll from "./FeaturesScroll";
import FeaturesData from "./FeaturesData";
export const Features = () => {
  return (
    <div className="features_container">
      <div className="features_header_container">
        <Fade delay={500} duration={1250}>
          <Slide direction="up">
            <div className="features_header_box">
              <h5>FEATURES</h5>
              <h1>Unlock the full potential of content management</h1>
              <p>
                Strapi is the leading open-source headless CMS. It’s 100%
                Javascript, fully customizable and developer-first.
              </p>
              <div>
                <div className="global_btn_container">
                  <ul>
                    <Bounce delay={1000}>
                      <ButtonEffect />
                    </Bounce>
                  </ul>
                </div>
              </div>

              <div className="feature_svg_container">
                <img
                  src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/features-hero_ca8edd6243.svg"
                  alt="Feature Svg"
                />
              </div>
            </div>
          </Slide>
        </Fade>
      </div>
      <FeaturesCards />
      <FeaturesSection />
      <FeaturesContent />
      <FeaturesGrid />
      <FeaturesScroll />
      <FeaturesData />
    </div>
  );
};
