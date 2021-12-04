import './image.scss';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageLoader from '../components/image/image-loader';

const DEAFULT_WIDTH = 400;
const DEAFULT_HEIGHT = 600;
const DEAFULT_ARRAY_LENGTH = 24;

export default {
  title: 'Images/ImageLoader',
  component: ImageLoader,
  argTypes: {
    src: { input: 'src' },
    alt: { input: '' },
    width: { input: null },
    height: { input: null },
    className: { input: '' }
  }
} as ComponentMeta<typeof ImageLoader>;

const Template: ComponentStory<typeof ImageLoader> = (args) => {
  const { src, width, height, className, alt } = args;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', padding: '10px' }}>
      {[...Array(DEAFULT_ARRAY_LENGTH).keys()].map((index) => (
        <div className="image-loader-story--loaded">
          <ImageLoader src={`${src}=${index}`} width={width} height={height} alt={alt} className={className} />
        </div>
      ))}
    </div>
  );
};

export const Loaded = Template.bind({});
Loaded.args = {
  src: `https://picsum.photos/${DEAFULT_WIDTH}/${DEAFULT_HEIGHT}?random`,
  width: DEAFULT_WIDTH,
  height: DEAFULT_HEIGHT,
  alt: 'story-image-lazy-loader',
  className: 'story-image-lazy-loader'
};

export const Error = Template.bind({});
Error.args = {
  ...Loaded.args,
  src: `https://error.photos/${DEAFULT_WIDTH}/${DEAFULT_HEIGHT}?random`
};
