import './icon-error.scss';
import * as React from 'react';
import markDownHTML from '../../../utilities/html/mark-down-html';
import * as ICON_CLOSE from '../../../assets/svg/icon-close.svg';

const COMPONENT_NAME = 'icon-error';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

const IconError: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <div className={COMPONENT_CONTENT_NAME} {...markDownHTML(ICON_CLOSE.default)} />
    </div>
  );
};

export default IconError;
