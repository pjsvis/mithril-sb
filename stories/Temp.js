/** @jsx m */
import m from 'mithril';

// Pass in vnode
// TODO: Make it typed
const Temp = (vnode) => {
  const bg = vnode.attrs.bg || 'bg-pink';
  const boxClass=`ba br3 b--black-10 pa2 shadow-3 fit-w pointer ${bg}`
   return { view: (vnode) => (   
     <div class={boxClass} {...vnode.attrs}>
       {vnode.children}
     </div>
   )}
 };
  
 export default Temp;
 