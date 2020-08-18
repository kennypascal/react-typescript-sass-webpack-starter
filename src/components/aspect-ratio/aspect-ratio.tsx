import './aspect-ratio.scss';
import * as React from 'react';

const COMPONENT_NAME = 'aspect-ratio';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

interface IAspectRatioProps {
  children: JSX.Element;
  width: number;
  height: number;
}

const AspectRatio: React.FunctionComponent<IAspectRatioProps> = ({ children, width, height }) => {
  const style = { paddingTop: `${(height / width) * 100}%` };
  return (
    <div className={COMPONENT_NAME} style={style}>
      <div className={COMPONENT_CONTENT_NAME}>{children}</div>
    </div>
  );
};

export default AspectRatio;
