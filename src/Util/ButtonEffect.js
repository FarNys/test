import React from "react";

const ButtonEffect = ({
  text = "Add A Name",
  classTitle = "btn_getstarted",
}) => {
  return (
    <li>
      <button className={classTitle}>
        {text} <span></span>
      </button>
    </li>
  );
};

export default ButtonEffect;
