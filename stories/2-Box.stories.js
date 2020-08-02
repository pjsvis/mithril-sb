import m from 'mithril';
import "tachyons";
import "./css/tachyons-ext.css"
import './css/app.css'

import { action } from '@storybook/addon-actions';
import Box from './Box';
import Temp from './Temp'

export default {
  title: 'Box',
  component: Box,
};

export const Text = () => ({
  view: () => m(Box, 'Hello Box'),
});

export const Styled = () => ({
  view: () => m(Temp, 'Hello Styled Box'),
});