import React from "react";
import ButtonEffect from "../../Util/ButtonEffect";
import "./Why.scss";
import WhyCards from "./WhyCards";
import WhyFeatures from "./WhyFeatures";
import WhyHeader from "./WhyHeader";
import WhyMid from "./WhyMid";
import WhySection from "./WhySection";
const Why = () => {
  return (
    <div className="why_page_container">
      <WhyHeader />
      <WhySection />
      <WhyFeatures />
      <WhyMid />
      <WhyCards />
    </div>
  );
};

export default Why;
