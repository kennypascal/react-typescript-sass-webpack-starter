import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import ImageLazyLoader from './image-lazy-loader';

const decorators = {
  decorators: [withKnobs]
};

storiesOf('ImageLazyLoader', module).add(
  'Aspect Ratio Lazy Loaded',
  () => (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <ImageLazyLoader src={text('Source', 'https://picsum.photos/600/400?random=1')} width={number('Width', 6)} height={number('Height', 4)} />
      <ImageLazyLoader src={text('Source', 'https://picsum.photos/600/400?random=2')} width={number('Width', 6)} height={number('Height', 4)} />
      <ImageLazyLoader src={text('Source', 'https://picsum.photos/600/400?random=3')} width={number('Width', 6)} height={number('Height', 4)} />
      <ImageLazyLoader src={text('Source', 'https://picsum.photos/600/400?random=4')} width={number('Width', 6)} height={number('Height', 4)} />
    </div>
  ),
  { ...decorators }
);
