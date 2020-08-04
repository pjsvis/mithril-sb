import m from 'mithril';
import { action } from '@storybook/addon-actions';
import Button from './Button';


export default {
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  view: () => m(Button, 'Hello Button'),
});

export const Emoji = () => ({
  view: () =>
    m(Button,
      m('span', { role: 'img', ariaLabel: 'so cool' }, '😀 😎 👍 💯')
    ),
});

export const TachyonsButton = () => ({
  view: () => m(Button, 'Tachyons Button'),
});

// export const DivEx = () => {
//   view: () => m('div', 'hello div')
// }