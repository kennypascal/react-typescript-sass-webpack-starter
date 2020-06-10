import './about.scss';
import * as React from 'react';
import markDownHTML from 'utilities/mark-down-html';

const ICON_WEBPACK = require('../../../assets/svg/icon-webpack.svg').default;
const ICON_REACT = require('../../../assets/svg/icon-react.svg').default;
const ICON_TYPESCRIPT = require('../../../assets/svg/icon-typescript.svg').default;
const ICON_SASS = require('../../../assets/svg/icon-sass.svg').default;

export interface IAboutProps { }

export default class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <div className="about">
        <div className="about__content">
          <div className="fadeInUp animated">
            <h1>About</h1>
            <p>A bare minimum react-webpack-typescript boilerplate for quickly creating interactive applications.</p>
            <span className='divider'>
              <hr />
            </span>
            <div className='tools'>
              <a href='https://webpack.github.io' className='tool tool--webpack'>
                <span {...markDownHTML(ICON_WEBPACK)} />
              </a>
              <a href='https://reactjs.org' className='tool tool--react'>
                <span className="icon" {...markDownHTML(ICON_REACT)} />
                <span className="type">React</span>
              </a>
              <a href='https://www.typescriptlang.org' className='tool tool--typescript'>
                <span {...markDownHTML(ICON_TYPESCRIPT)} />
              </a>
              <a href='https://sass-lang.com' className='tool tool--sass'>
                <span {...markDownHTML(ICON_SASS)} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
