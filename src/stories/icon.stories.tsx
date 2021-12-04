import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconLoading from '../components/ui/icon/icon-loading';
import IconError from '../components/ui/icon/icon-error';

export default {
  title: 'UI/Icons',
  component: IconLoading,
  argTypes: {
    className: { input: '' }
  }
} as ComponentMeta<typeof IconLoading>;

const TemplateLoading: ComponentStory<typeof IconLoading> = (args) => {
  const { className } = args;

  return <IconLoading className={className} />;
};

const TemplateError: ComponentStory<typeof IconError> = (args) => {
  const { className } = args;

  return <IconError className={className} />;
};

export const Loading = TemplateLoading.bind({});
Loading.args = {
  className: 'loading'
};

export const Error = TemplateError.bind({});
Error.args = {
  className: 'error'
};
