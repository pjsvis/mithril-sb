import m from 'mithril';
// TODO: Figure out how to move the styles to a global location
import "tachyons";
import "./css/tachyons-ext.css"
import './css/app.css'
import { action } from '@storybook/addon-actions';
import Box from './Box';
import Temp from './Temp'


export default {
  title: 'Box',
  component: Box,  
  parameters: {
    notes: `
    ## Box notes
    - These are some notes on the box stuff.
    - Next item
    `,
  }
};

export const Text = () => ({
  view: () => m(Box, 'Hello Box'),
});

export const Styled = () => ({
  view: () => m(Temp, 'Hello Styled Box'),
});