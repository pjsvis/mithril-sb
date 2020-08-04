/** @jsx m */
import m from 'mithril';
import './button-ex.css'

// TODO: Figure out how to type the attrs

export const ButtonEx = {      
  view: ({attrs:  {type, text, onclick, color, disabled, left}  }) =>
      m('button', {
        class: color || 'grey',
        type:  type  || 'button',
        disabled,
        onclick,
        style: 'float: ' + (left ? 'none' : 'right')
      }, text)
  }
  
  /*
  const app = {
    view: () =>
      m('div',
        m(button, {text: 'bye',   color: 'blue', left: true}),
        m(button, {text: 'hello', color: 'red',  left: true, onclick: () => p('click!')}),
        m(button, {text: 'error', color: 'green'}),
        m(button, {text: 'test'})
      )
  }
  
  m.mount(document.body, app)
  */

