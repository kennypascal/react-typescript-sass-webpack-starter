import './home.scss';
import * as React from 'react';
import BackgroundImageLoader from '../../../components/image/background-image-loader';

const COMPONENT_NAME = 'home';
const COMPONENT_BKGB_NAME = `${COMPONENT_NAME}__bkgd`;
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

export default class Home extends React.Component {
  public refApp = React.createRef<HTMLDivElement>();

  public refImg = React.createRef<HTMLImageElement>();

  public render(): JSX.Element {
    return (
      <div ref={this.refApp} className={COMPONENT_NAME}>
        <div className={COMPONENT_BKGB_NAME}>
          <BackgroundImageLoader src="assets/img/bkgd-809-6000x4000.jpg" width={6} height={4} />
        </div>
        <div className={COMPONENT_CONTENT_NAME}>
          <h1 className="animated fadeInUp">En las monta&ntilde;as codificamos.</h1>
        </div>
      </div>
    );
  }
}
