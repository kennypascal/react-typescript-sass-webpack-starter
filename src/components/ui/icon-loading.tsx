import "./icon-loading.scss";
import * as React from "react";
import markDownHTML from "../../utilities/html/mark-down-html";

const COMPONENT_NAME = "icon-loading";
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;
const ICON_LOADING = require("../../assets/svg/icon-loading.svg").default;

const IconLoading: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <div
        className={COMPONENT_CONTENT_NAME}
        {...markDownHTML(ICON_LOADING)}
      />
    </div>
  );
};

export default IconLoading;
