import './home.scss';
import * as React from 'react';
import * as IMAGE_BKGD from '../../../assets/img/bkgd-809-6000x4000.jpg';

const COMPONENT_NAME = 'home';

export default class Home extends React.Component {
  public refApp = React.createRef<HTMLDivElement>();

  public refImg = React.createRef<HTMLImageElement>();

  private onLoad = () => {
    this.refImg.current.classList.add('fadeIn');
    this.refImg.current.classList.add('animated');
  };

  public render(): JSX.Element {
    return (
      <div ref={this.refApp} className={COMPONENT_NAME}>
        <div className={`${COMPONENT_NAME}__bkgd`}>
          <img ref={this.refImg} src={IMAGE_BKGD.default} alt="" data-id="test" onLoad={this.onLoad} />
        </div>
        <div className={`${COMPONENT_NAME}__content`}>
          <h1 className="animated fadeInUp">En las monta&ntilde;as codificamos.</h1>
        </div>
      </div>
    );
  }
}
