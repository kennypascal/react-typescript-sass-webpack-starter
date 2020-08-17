import './about.scss';
import * as React from 'react';
import markDownHTML from '../../../utilities/html/mark-down-html';
import * as ICON_WEBPACK from '../../../assets/svg/icon-webpack.svg';
import * as ICON_REACT from '../../../assets/svg/icon-react.svg';
import * as ICON_TYPESCRIPT from '../../../assets/svg/icon-typescript.svg';
import * as ICON_SASS from '../../../assets/svg/icon-sass.svg';

const COMPONENT_NAME = 'about';
const COMPONENT_TOOL_NAME = 'tool';

const About: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={COMPONENT_NAME}>
      <div className={`${COMPONENT_NAME}__content`}>
        <div className="fadeInUp animated">
          <h1>About</h1>
          <p>A bare minimum react-webpack-typescript boilerplate for quickly creating interactive applications.</p>
          <span className="divider">
            <hr />
          </span>
          <div className="tools">
            <a href="https://webpack.github.io" className={`${COMPONENT_TOOL_NAME} ${COMPONENT_TOOL_NAME}--webpack`}>
              <span {...markDownHTML(ICON_WEBPACK.default)} />
            </a>
            <a href="https://reactjs.org" className={`${COMPONENT_TOOL_NAME} ${COMPONENT_TOOL_NAME}--react`}>
              <span className="icon" {...markDownHTML(ICON_REACT.default)} />
              <span className="type">React</span>
            </a>
            <a href="https://www.typescriptlang.org" className={`${COMPONENT_TOOL_NAME} ${COMPONENT_TOOL_NAME}--typescript`}>
              <span {...markDownHTML(ICON_TYPESCRIPT.default)} />
            </a>
            <a href="https://sass-lang.com" className={`${COMPONENT_TOOL_NAME} ${COMPONENT_TOOL_NAME}--sass`}>
              <span {...markDownHTML(ICON_SASS.default)} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
