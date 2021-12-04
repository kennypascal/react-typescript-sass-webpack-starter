import './image.scss';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import AspectRatio from '../aspect-ratio/aspect-ratio';
import IconLoading from '../ui/icon/icon-loading';
import IconError from '../ui/icon/icon-error';

const COMPONENT_NAME = 'image-loader';

export interface IImageLoaderProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const getStatusIcon = (status, className = null): JSX.Element => {
  if (status === 'error') {
    return <IconError className={className} />;
  }
  if (status === 'loading') {
    return <IconLoading className={className} />;
  }
  return null;
};

const getClassName = (status, className): string => {
  return cx({
    [`${className}`]: className,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_NAME}--${status}`]: status
  });
};

const ImageLoader: React.FunctionComponent<IImageLoaderProps> = (props) => {
  const { src, alt, className, width, height } = props;
  const { ref, inView } = useInView({ threshold: 0 });
  const [status, setStatus] = useState('loading');
  const statusIconElement = getStatusIcon(status, className);
  const imgElement = status !== 'error' ? <img ref={ref} src={src} alt={alt} className={getClassName(status, className)} onLoad={() => setStatus('loaded')} onError={() => setStatus('error')} data-in-view={inView} /> : null;

  return width && height ? (
    <AspectRatio width={width} height={height}>
      <>
        {statusIconElement}
        {imgElement}
      </>
    </AspectRatio>
  ) : (
    <>
      {statusIconElement}
      {imgElement}
    </>
  );
};

export default ImageLoader;
