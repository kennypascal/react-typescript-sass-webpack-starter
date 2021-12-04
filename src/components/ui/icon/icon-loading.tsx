import './icon-loading.scss';
import * as React from 'react';
import cx from 'classnames';
import markDownHTML from '../../../utilities/html/mark-down-html';
import * as ICON_LOADING from '../../../assets/svg/icon-loading.svg';

const COMPONENT_NAME = 'icon-loading';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

interface IIconLoading {
  className?: string;
}

const IconLoading: React.FunctionComponent<IIconLoading> = (props) => {
  const { className = null } = props;
  const c = cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true
  });

  return (
    <div className={c}>
      <div className={COMPONENT_CONTENT_NAME} {...markDownHTML(ICON_LOADING.default)} />
    </div>
  );
};

export default IconLoading;
