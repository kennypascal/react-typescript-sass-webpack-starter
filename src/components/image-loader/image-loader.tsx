import './image-loader.scss';
import React, { useState } from 'react';
import cx from 'classnames';
import AspectRatio from '../aspect-ratio/aspect-ratio';
import IconLoading from '../ui/icon/icon-loading';
import IconError from '../ui/icon/icon-error';

const COMPONENT_NAME = 'image-loader';

interface IImageLoaderProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageLoader: React.FunctionComponent<IImageLoaderProps> = (props) => {
  const { src, alt, className, width, height } = props;
  const [status, setStatus] = useState('loading');
  const imgClassName = cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--${status}`]: status
  });

  const img =
    status !== 'error' ? (
      <img src={src} alt={alt} className={imgClassName} onLoad={() => setStatus('loaded')} onError={() => setStatus('error')} />
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

export default ImageLoader;
