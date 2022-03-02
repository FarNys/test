import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../Styles/TopicCard.scss";
import { Fade } from "react-awesome-reveal";

const TopicCard = ({ title = "ADD SOME TITLE", text = "ADD SOME TEXT" }) => {
  return (
    <Fade>
      <div className="topic_card_container">
        <div className="topic_card_header">
          <Fade delay={500}>
            <CheckCircleIcon className="topic_card_icon" />
          </Fade>

          <h3>{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </Fade>
  );
};

export default TopicCard;
