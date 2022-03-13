import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const FeaturesScroll = () => {
  //   let inHeight = innerHeight;
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".features_scroll_cards",
          start: "top center",
          end: "bottom top",
          markers: true,
          scrub: true,
          pin: true,
        },
      })
      .from(".features_scroll_card_2 ", 2, { y: 700 })
      .to(".features_scroll_card_2 ", 2, { y: 0 });
  }, []);
  return (
    <div className="features_scroll_container">
      <div className="features_scroll_box">
        {/* <h2>More Features</h2> */}
        <div className="features_scroll_cards">
          <div className="features_scroll_card features_scroll_card_1">
            Icon 01/05
          </div>
          <div className="features_scroll_card features_scroll_card_card features_scroll_card_2">
            Icon 02/05
          </div>
          {/* <div className="features_scroll_card features_scroll_card_card">
            Icon 03/05
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesScroll;
