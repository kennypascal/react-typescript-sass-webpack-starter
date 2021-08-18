import './image-lazy-loader.scss';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import AspectRatio from '../aspect-ratio/aspect-ratio';
import ImageLoader, { IImageLoaderProps } from './image-loader';

const COMPONENT_REF_NAME = 'image-ref';
const IN_VIEW_OPTIONS = { threshold: 0.2, triggerOnce: true, delay: 1000 };

const ImageLazyLoader: React.FunctionComponent<IImageLoaderProps> = (props) => {
  const { src, alt, className, width, height } = props;
  const { ref, inView } = useInView({ ...IN_VIEW_OPTIONS });
  const imgRef = <div className={COMPONENT_REF_NAME} ref={ref} data-in-view={inView} />;
  const imgLoader = <ImageLoader src={src} alt={alt} className={className} width={width} height={height} />;
  const content = !inView ? imgRef : imgLoader;

  return width && height && !inView ? (
    <AspectRatio width={width} height={height}>
      {content}
    </AspectRatio>
  ) : (
    content
  );
};

export default ImageLazyLoader;
