/** @jsx m */
import m from "mithril";

const Box = {
   view: (vnode: m.Vnode) => (   
    <div class="ba br3 b--black-10 pa2 shadow-3 fit-w pointer" {...vnode.attrs}>
      {vnode.children}
    </div>
  ),
};

// TODO: try closure component with background color passed in as attrs


export default Box;
