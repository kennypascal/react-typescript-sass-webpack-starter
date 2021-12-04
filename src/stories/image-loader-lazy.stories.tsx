import './image.scss';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageLazyLoader from '../components/image/image-lazy-loader';

const defaultWidth = 400 * 1.5;
const defaultHeight = 600 * 1.5;

export default {
  title: 'Images/ImageLazyLoader',
  component: ImageLazyLoader,
  argTypes: {
    src: { input: 'src' },
    alt: { input: '' },
    width: { input: null },
    height: { input: null },
    className: { input: '' }
  }
} as ComponentMeta<typeof ImageLazyLoader>;

const TemplateLazy: ComponentStory<typeof ImageLazyLoader> = (args) => {
  const { src, width, height, className, alt } = args;
  const imageArrayLength = 24;
  const imageArray = [];

  [...Array(imageArrayLength).keys()].forEach((index) => {
    imageArray[index] = (
      <div className="image-loader-story--loaded">
        <ImageLazyLoader src={`${src}=${index}`} width={width} height={height} alt={alt} className={className} />
      </div>
    );
  });

  return <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px' }}>{...imageArray}</div>;
};

export const Loaded = TemplateLazy.bind({});
Loaded.args = {
  src: `https://picsum.photos/${defaultWidth}/${defaultHeight}?random`,
  width: defaultWidth,
  height: defaultHeight,
  alt: 'story-image-loader',
  className: 'story-image-loader'
};

export const Error = TemplateLazy.bind({});
Error.args = {
  ...Loaded.args,
  src: `https://error.photos/${defaultWidth}/${defaultHeight}?random`
};
