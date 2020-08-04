/** @jsx m */
import m, {Component} from "mithril";

interface Attrs{
  name: string;
  text: string;
  onclick: Function;
}

export const Hero : Component<Attrs> = {  
    view: ({attrs}) => {
      const hero = "black bg-dark-blue white br2 pa2 fit-w pointer";
      return (<div class={hero} onclick={attrs.onclick}> {attrs.text}</div>);    
  }
};