import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, ...rest }) => {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
