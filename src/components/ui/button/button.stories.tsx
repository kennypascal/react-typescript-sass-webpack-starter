import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './button';

storiesOf('Button', module)
  .add('Label', () => <Button type="button" label="Button" />)
  .add('Submit', () => <Button type="submit">Submit</Button>)
  .add('Reset', () => <Button type="reset">Reset</Button>)
  .add('Disabled', () => <Button type="button" label="Button" disabled />)
  .add('Hidden', () => <Button type="button" label="Button" hidden />);
