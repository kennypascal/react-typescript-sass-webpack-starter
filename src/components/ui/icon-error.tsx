import "./icon-error.scss";
import * as React from "react";
import markDownHTML from "../../utilities/html/mark-down-html";

const COMPONENT_NAME = "icon-error";
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;
const ICON_CLOSE = require("../../assets/svg/icon-close.svg").default;

const IconError: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <div
        className={COMPONENT_CONTENT_NAME}
        {...markDownHTML(ICON_CLOSE)}
      />
    </div>
  );
};

export default IconError;
