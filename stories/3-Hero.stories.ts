import m from "mithril";
import { action } from "@storybook/addon-actions";
import { Hero } from "./hero";
import { Card } from "./card";
import {MarkedEx} from './marked'
import {ButtonEx} from './button-ex'
import {DivComponent} from './div-component'
import {ClosureComponent} from './closure-component'

export default {
  title: "Hero",
  component: Hero,
  parameters: {
    notes: `
## Hero notes
- [Ref Mithril css docs](https://mithril.js.org/archive/v1.1.7/css.html)

`
  }
};

export const HeroEx = () => ({
  view: () => [
    m(Hero, {name: 'red', text: 'Hello there', onclick: (ev: any) => {console.log(ev)}} ), 
    m('.f6.red.mt2', 'The Hero component is in typescript and uses TSX and has an onclick event that logs the ev to the console'),
],
})

const mdText = `
### markdown
<hr/>
This is a markdown component that uses <code>marked</code> to render html. It's as simple as: 

<code>m.trust(marked('markdown string')</code>

- [X] How do we pass the markdown string to the component?
- [ ] See ButtonsEx for examples of passing attributes down to buttons
- [ ] Add some styling to ButtonsEx using tachyons
- [X] How do we style the html that is rendered in the marked component
- marked recommends using [DomPurify](https://github.com/cure53/DOMPurify) to make html safe
- [ ] TODO: implement dompurify

<hr/>
<center>

[See uikit on github](https://github.com/uikit/uikit)

</center>

`


const cardAttrs = {
  imageUrl: 'https://getuikit.com/docs/images/avatar.jpg',
  title: 'Card Title',
  date: 'TODO',
  bodyText: 'Hello there from card land. Maybe we should embed a marked component in the card to handle the text.',
  linkText: 'TODO',
  linkUrl: 'TODO',
}

export const CardEx = () => ({
  view: () =>  [
    m('div.w-20', 
      [m(Card, cardAttrs)], 
      m('div.f6.mt2','A card using uikit styling with 20% screen width. '), 
      m('div.ba.br3.b--black-10.pa3.shadow-3.f7.mt2', 
        [ m(MarkedEx, {text: mdText})])),
    ]
});
  
const p = (ev: any) => {
  console.log(ev)
}

  export const ButtonsEx = () => ({
    view: () => [  m('div.w-30',
    m(ButtonEx, {text: 'bye',   color: 'blue', left: true}),
    m(ButtonEx, {text: 'hello', color: 'red',  left: true, onclick: () => p('click!')}),
    m(ButtonEx, {text: 'error', color: 'green'}),
    m(ButtonEx, {text: 'test'}),
    m('div.f6.mt2','Use tachyons to style buttons. See tachyons-ext for examples'),
    m('div.f6.red', 'Use some layout logic to arrange components on page'),
    m('div.f6.green', 'eg flex and the lobotomized owl selector'),
    m('div.f6', 'TODO: namespace the css in button-ex to stop it clashing with tachyons css. For now just comment out the dodgy button css' ),
  )]
  })

  export const DivEx = () => ({
    
      view: (vnode: m.Vnode) => (m('div.w-20', [m(DivComponent, {color: 'green'}, 'Hello from children'), m('div.ba.br3.b--black-10.f6.black-40.mt2.pa2.shadow-3', `The above div component has a color attribute and text as children. The color attribute is optional and constrained to red/blue/green.`)])),
       
  })

  export const ClosureComponentEx = () => ({
    
    view: (vnode: m.Vnode) => (m('div.w-20', [m(ClosureComponent, {color: 'green'}, 'Hello from children'), m('div.ba.br3.b--black-10.f6.black-40.mt2.pa2.shadow-3', `The above is a closure component with a color attribute and text as children. The color attribute is optional and constrained to red/blue/green.`)])),
     
})