import m from 'mithril';
import { action } from '@storybook/addon-actions';
import Box from './Box';
import Temp from './Temp'
import {More} from './more'


export default {
  title: 'Box',
  component: Box,  
  parameters: {
    notes: `
## Box notes
- The box is a div with some tachyons styling
- Background colour can be changed via component attributes (NOT!)

## todo
- [] support *.ts files
- [] implement addon-: actions, knobs, and jsx
- [X] add attributes at component level to change background colour
- [X] move styles to global location => config.js
`,
  }
};

export const Text = () => ({
  view: () => m(Box, 'Hello Box'),
});

export const Styled = () => ({
  view: () => m(Temp, 'Hello Default Styled Box'),
});

export const StyledBlue = () => ({
  view: () => ([ m(Temp, 'Hello Blue Styled Box'), m('.pt2 f6','Figure out how to pass attrs to tsx component')]),
});