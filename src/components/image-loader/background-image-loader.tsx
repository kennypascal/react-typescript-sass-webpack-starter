import './background-image-loader.scss';
import React, { useState } from 'react';
import cx from 'classnames';
import AspectRatio from '../aspect-ratio/aspect-ratio';
import IconLoading from '../ui/icon/icon-loading';
import IconError from '../ui/icon/icon-error';
import loadImage from '../../utilities/image/load-image';

const COMPONENT_NAME = 'background-image-loader';

interface IBackgroundImageLoaderProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  size?: string;
}

const BackgroundImageLoader: React.FunctionComponent<IBackgroundImageLoaderProps> = (props) => {
  const { src, className, width, height, size = 'cover' } = props;
  const [status, setStatus] = useState('loading');
  const imgClassName = cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--${status}`]: status
  });

  const onLoaded = () => {
    if (status !== 'loaded') {
      setStatus('loaded');
    }
  };

  const onError = () => {
    if (status !== 'error') {
      setStatus('error');
    }
  };

  loadImage(src, onLoaded, onError);

  const img =
    status !== 'error' ? (
      <div style={{ backgroundImage: `url(${src})`, backgroundSize: size }} className={imgClassName} />
    ) : (
      <>
        <IconError />
      </>
    );
  return width && height ? (
    <AspectRatio width={width} height={height}>
      <>
        {status === 'loading' && <IconLoading />}
        {img}
      </>
    </AspectRatio>
  ) : (
    <>
      {status === 'loading' && <IconLoading />}
      {img}
    </>
  );
};

export default BackgroundImageLoader;
