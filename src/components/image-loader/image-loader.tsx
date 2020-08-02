import './image-loader.scss';
import React, { useState } from 'react';
import * as cx from 'classnames';

const COMPONENT_NAME = 'image-loader';

interface IImageLoaderProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageLoader: React.FunctionComponent<IImageLoaderProps> = (props) => {
  const { src, alt, className } = props;
  const [status, setStatus] = useState('loading');
  const imgClassName = cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--${status}`]: status
  });

  return (
    <>
      {status === 'loading' && <span>Loading...</span>}
      <img src={src} alt={alt} className={imgClassName} onLoad={() => setStatus('loaded')} onError={() => setStatus('error')} />
    </>
  );
};

export default ImageLoader;
