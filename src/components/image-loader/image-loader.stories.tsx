import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ImageLoader from './image-loader';

const decorators = {
  decorators: [withKnobs]
};

storiesOf('ImageLoader', module)
  .add('Loaded', () => <ImageLoader src={text('Source', 'img/bkgd-809-6000x4000.jpg')} className="story" />, { ...decorators })
  .add('Error', () => <ImageLoader src={text('Source', 'img/error/error.jpg')} />, { ...decorators })
  .add('Aspect Ratio Loaded', () => <ImageLoader src={text('Source', 'img/bkgd-809-6000x4000.jpg')} width={number('Width', 6)} height={number('Height', 4)} />, { ...decorators })
  .add('Aspect Ratio Error', () => <ImageLoader src={text('Source', 'img/error.jpg')} width={number('Width', 6)} height={number('Height', 4)} />, { ...decorators });
