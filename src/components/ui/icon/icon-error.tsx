import './icon-error.scss';
import * as React from 'react';
import cx from 'classnames';
import markDownHTML from '../../../utilities/html/mark-down-html';
import * as ICON_CLOSE from '../../../assets/svg/icon-close.svg';

const COMPONENT_NAME = 'icon-error';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

interface IIconErrorProps {
  className?: string;
}

const IconError: React.FunctionComponent<IIconErrorProps> = (props) => {
  const { className = null } = props;
  const c = cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true
  });

  return (
    <div className={c}>
      <div className={COMPONENT_CONTENT_NAME} {...markDownHTML(ICON_CLOSE.default)} />
    </div>
  );
};

export default IconError;
