import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import AspectRatio from '../aspect-ratio/aspect-ratio';
import ImageLoader, { IImageLoaderProps } from './image-loader';

const ImageLazyLoader: React.FunctionComponent<IImageLoaderProps> = (props) => {
  const { src, alt, className, width, height } = props;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true, delay: 1000 });
  const refElement = <div className="image-ref" ref={ref} data-in-view={inView} />;
  const imgElement = <ImageLoader src={src} alt={alt} className={className} width={width} height={height} />;
  const content = !inView ? refElement : imgElement;

  return width && height && !inView ? (
    <AspectRatio width={width} height={height}>
      {content}
    </AspectRatio>
  ) : (
    content
  );
};

export default ImageLazyLoader;
