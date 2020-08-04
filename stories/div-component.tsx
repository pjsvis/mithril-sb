/** @jsx m */
import m, { Component } from "mithril";

// NOTE: We do not need to export the Attrs
type Attrs = {
    color?: 'red' | 'blue' | 'green';  
  }

  const baseClass='ba br3 b--black-10 pa2 shadow-3 fit-w'

  export const DivComponent: Component<Attrs> = {
    view: ({ attrs, children }) => {
      const classVals = `${baseClass} ${attrs.color}`     
      return (
        <div class={classVals}>{children}</div>
      )       
    }
  };




    
