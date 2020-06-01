import './app.scss';
import React, { Component }  from 'react';
import markDownHTML from '../utilities/mark-down-html';

const COMPONENT_NAME = 'app';

const IMAGE_BKGD = require('../assets/img/bkgd-809-6000x4000.jpg').default;
const ICON_WEBPACK = require('../assets/svg/icon-webpack.svg').default;
const ICON_REACT = require('../assets/svg/icon-react.svg').default;
const ICON_TYPESCRIPT = require('../assets/svg/icon-typescript.svg').default;
const ICON_SASS = require('../assets/svg/icon-sass.svg').default;

export default class App extends Component {
  public refApp = React.createRef<HTMLDivElement>();

  public componentDidMount = (): void => {
    console.log('componentDidMount', this, this.refApp);
  };

  private onLoad = (): void => {
    this.setAppStatus();
  };

  private onError = (): void => {
    this.setAppStatus();
  };

  private setAppStatus = (): void => {
    this.refApp.current.classList.add('is-ready');
  };

  public render(): JSX.Element {
    return (
      <div ref={this.refApp} className={COMPONENT_NAME}>
        <img className={`${COMPONENT_NAME}__bkgd`} src={IMAGE_BKGD} alt='' data-id='test' onLoad={this.onLoad} onError={this.onError} />
        <div className={`${COMPONENT_NAME}__content`}>
          <h1>En las monta&ntilde;as codificamos.</h1>
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
    );
  }
}
