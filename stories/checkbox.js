/** @jsx m */
import m from 'mithril';

// TODO: Figure out how to type the attrs

export const Checkbox = {      
  view: ({attrs:  {type, text, onclick, color, disabled, left}  }) =>
      m('div', {
        class: color || 'grey',
        type:  type  || 'button',
        disabled,
        onclick,
        style: 'float: ' + (left ? 'none' : 'right')
      }, text)
  }


  /*
  <!-- add class p-default -->
    <div class="pretty p-default">
        <input type="checkbox" />
        <div class="state">
            <label>Default</label>
        </div>
    </div>

    <!-- add class p-fill -->
    <div class="pretty p-default p-fill">
        <input type="checkbox" />
        <div class="state">
            <label>Fill</label>
        </div>
    </div>

    <!-- add class p-thick -->
    <div class="pretty p-default p-thick">
        <input type="checkbox" />
        <div class="state">
            <label>Thick</label>
        </div>
    </div>
  */