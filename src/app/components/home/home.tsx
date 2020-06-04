import './home.scss';
import * as React from 'react';

const COMPONENT_NAME = 'home';
const IMAGE_BKGD = require('../../../assets/img/bkgd-809-6000x4000.jpg').default;

export interface IHomeProps {
}

export default class Home extends React.Component<IHomeProps> {
  public refApp = React.createRef<HTMLDivElement>();

  public render() {
    return (
      <div ref={this.refApp} className={COMPONENT_NAME}>
        <img className={`${COMPONENT_NAME}__bkgd`} src={IMAGE_BKGD} alt='' data-id='test' />
        <div className={`${COMPONENT_NAME}__content`}>
          <h1>En las monta&ntilde;as codificamos.</h1>
        </div>
      </div>
    );
  }
}
