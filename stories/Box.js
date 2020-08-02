/** @jsx m */

import m from "mithril";
import "tachyons";
import "./tachyons-ext.css"
import './app.css'

const Box = {
  view: (vnode) => (
    <div class="ba br3 b--black-10 pa2 shadow-5 fit-w" {...vnode.attrs}>
      {vnode.children}
    </div>
  ),
};

export default Box;
