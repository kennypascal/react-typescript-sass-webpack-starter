import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import BackgroundImageLoader from './background-image-loader';

const decorators = {
  decorators: [withKnobs]
};

storiesOf('BackgroundImageLoader', module)
  .add('Loaded Size Cover', () => <BackgroundImageLoader src={text('Source', 'img/sven-scheuermeier-37377-unsplash.jpg')} className="story" />, { ...decorators })
  .add('Loaded Size Contain', () => <BackgroundImageLoader src={text('Source', 'img/sven-scheuermeier-37377-unsplash.jpg')} className="story" size="contain" />, { ...decorators })
  .add('Error', () => <BackgroundImageLoader src={text('Source', 'img/error/error.jpg')} />, { ...decorators })
  .add('Aspect Ratio Loaded', () => <BackgroundImageLoader src={text('Source', 'img/sven-scheuermeier-37377-unsplash.jpg')} width={number('Width', 2560)} height={number('Height', 1707)} />, { ...decorators })
  .add('Aspect Ratio Error', () => <BackgroundImageLoader src={text('Source', 'img/error.jpg')} width={number('Width', 6)} height={number('Height', 4)} />, { ...decorators });
