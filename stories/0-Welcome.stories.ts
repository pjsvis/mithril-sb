import m from 'mithril';
import { linkTo } from '@storybook/addon-links';
import { jsxDecorator } from "storybook-addon-jsx";
import Welcome from './Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
  // TODO: Figure out how to add jsxDecorator
};

export const ToStorybook = () => ({
  view: () => m(Welcome, { showApp: linkTo('Button') }),
});

ToStorybook.story = {
  name: 'to Storybook',
};
