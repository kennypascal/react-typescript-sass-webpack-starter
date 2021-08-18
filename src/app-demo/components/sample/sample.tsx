import './sample.scss';
import * as React from 'react';
import ImageLazyLoader from '../../../components/image-loader/image-lazy-loader';

const COMPONENT_NAME = 'sample';
const COMPONENT_CONTENT_NAME = `${COMPONENT_NAME}__content`;

const IMAGE_GRID_NAME = 'image-grid';
const IMAGE_GRID_CONTENT_NAME = `${IMAGE_GRID_NAME}__content`;

const Sample: React.FunctionComponent = () => {
  return (
    <div className={COMPONENT_NAME}>
      <div className={COMPONENT_CONTENT_NAME}>
        <div className="header fadeIn animated">
          <h1>Sample</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={IMAGE_GRID_NAME}>
          {[...Array(24).keys()].map((index) => (
            <div key={index} className={IMAGE_GRID_CONTENT_NAME}>
              <ImageLazyLoader src={`https://picsum.photos/400/600?random=${index}&grayscale`} width={4} height={6} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sample;
