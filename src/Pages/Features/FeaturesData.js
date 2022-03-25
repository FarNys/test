import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { duration } from "@mui/material";
const FeaturesData = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   const getEl = document.querySelector(".feature_scroll_card");
  //   console.log(getEl.clientHeight);
  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: ".features_data_inner",
  //         start: "top top",
  //         end: "bottom center",
  //         // markers: true,
  //         scrub: true,
  //         pin: true,
  //       },
  //     })
  //     .to(".features_data_child_img_2", 1, { opacity: 1 })
  //     .to(".features_data_card_1", 1, { opacity: 1 })
  //     .to(".features_data_card_2", 1, { opacity: 1 });
  // }, []);
  // useLayoutEffect(() => {
  //   const getEl = document.querySelector(".stick");
  //   const getBoundary = window.pageYOffset + getEl.getBoundingClientRect().top;
  //   const getTarget = document.querySelector(".features_data_img_container");
  //   // const func = () => {
  //   //   console.log(getEl, getBoundary, window.scrollY);
  //   // };
  //   window.addEventListener("scroll", () => {
  //     if (getBoundary > window.scrollY) {
  //       console.log("HI all");
  //       console.log(getBoundary, window.scrollY);
  //     }
  //     if (getBoundary + 250 < window.scrollY) {
  //       getTarget.style.transform = "translateX(200px)";
  //     } else {
  //       getTarget.style.transform = "translateX(0)";
  //     }
  //   });

  // }, []);
  return (
    <div className="features_data_container">
      <div className="stick">TEST STICKY</div>

      <div className="features_data_inner">
        <div className="features_data_img_container">
          <img
            className="features_data_parent_img"
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-primary-desktop_e0dab1f509.svg"
            alt="svg"
          />
          <img
            className="features_data_child_img_1"
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step5-2D_9d3fc362cc.svg"
            alt="svg-1"
          />
          <img
            className="features_data_child_img_2"
            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg"
            alt="svg-2"
          />
        </div>
        <div className="features_data_text_container">
          <div className="features_data_card features_data_card_1">TEXT 1</div>
          <div className="features_data_card features_data_card_2">TEXT 2</div>
          <div className="features_data_card features_data_card_3"> TEXT 3</div>
        </div>
      </div>
      <div className="extra">Extra</div>
    </div>
  );
};

export default FeaturesData;
