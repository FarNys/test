import React from "react";
import { Link } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Fade } from "react-awesome-reveal";

const BlogProduct = () => {
  return (
    <div className="blog_category_container">
      <div className="blog_category_box">
        <div className="blog_category_title_container">
          <h2>Product Blogs</h2>
          <h2>
            <Link to="#">
              See All Product Blogs{" "}
              <div>
                <ArrowForwardIcon />
              </div>
            </Link>
          </h2>
        </div>
        <div className="blog_category_cards_container">
          <Fade>
            <div className="blog_category_card">
              <div className="blog_category_image_container">
                <Link to="#">
                  <img
                    src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_84_5_afc93d7066.png"
                    alt="blog post"
                  />
                </Link>
              </div>
              <div className="blog_category_card_title">
                <Link to="#">
                  <h3>Gastby is one of the best Static Sit Generation</h3>
                </Link>
              </div>
              <div className="blog_category_content_container">
                <p>
                  Both Gatsby and Strapi have released many beautiful features
                  recently. We updated the gastby-source-strapi package, so that
                  it works smoothly with the latest versions of the tools.
                </p>
              </div>
              <div className="blog_category_time_container">
                <Link to="#">
                  <div className="blog_category_time_container_icon">
                    <BsFillCircleFill />
                  </div>
                  <h4>Tutorial</h4>
                </Link>

                <h6>5 MIN READ</h6>
              </div>
              <div className="blog_category_time_container blog_writer_date_container">
                <div className="blog_category_time_container_icon">
                  <BsFillCircleFill />
                </div>
                <h5>Mehdi </h5>

                <h6>June 9, 2021</h6>
              </div>
            </div>
          </Fade>
          <Fade delay={250}>
            <div className="blog_category_card">
              <div className="blog_category_image_container">
                <Link to="#">
                  <img
                    src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_84_5_afc93d7066.png"
                    alt="blog post"
                  />
                </Link>
              </div>
              <div className="blog_category_card_title">
                <Link to="#">
                  <h3>Gastby is one of the best SSG</h3>
                </Link>
              </div>
              <div className="blog_category_content_container">
                <p>
                  Both Gatsby and Strapi have released many beautiful features
                  recently. We updated the gastby-source-strapi package, so that
                  it works smoothly with the latest versions of the tools.
                </p>
              </div>
              <div className="blog_category_time_container">
                <Link to="#">
                  <div className="blog_category_time_container_icon">
                    <BsFillCircleFill />
                  </div>
                  <h4>Tutorial</h4>
                </Link>

                <h6>5 MIN READ</h6>
              </div>
              <div className="blog_category_time_container blog_writer_date_container">
                <div className="blog_category_time_container_icon">
                  <BsFillCircleFill />
                </div>
                <h5>Mehdi </h5>

                <h6>June 9, 2021</h6>
              </div>
            </div>
          </Fade>
          <Fade delay={500}>
            <div className="blog_category_card">
              <div className="blog_category_image_container">
                <Link to="#">
                  <img
                    src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Frame_84_5_afc93d7066.png"
                    alt="blog post"
                  />
                </Link>
              </div>
              <div className="blog_category_card_title">
                <Link to="#">
                  <h3>
                    Gastby is one of the best Static Sit Generation For every
                    one
                  </h3>
                </Link>
              </div>
              <div className="blog_category_content_container">
                <p>
                  Both Gatsby and Strapi have released many beautiful features
                  recently. We updated the gastby-source-strapi package, so that
                  it works smoothly with the latest versions of the tools.
                </p>
              </div>
              <div className="blog_category_time_container">
                <Link to="#">
                  <div className="blog_category_time_container_icon">
                    <BsFillCircleFill />
                  </div>
                  <h4>Tutorial</h4>
                </Link>

                <h6>5 MIN READ</h6>
              </div>
              <div className="blog_category_time_container blog_writer_date_container">
                <div className="blog_category_time_container_icon">
                  <BsFillCircleFill />
                </div>
                <h5>Mehdi </h5>

                <h6>June 9, 2021</h6>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BlogProduct;
