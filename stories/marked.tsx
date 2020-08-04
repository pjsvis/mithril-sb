/** @jsx m */
import m, {Component} from 'mithril';
import marked from 'marked'
import DOMPurify from 'dompurify'


interface Attrs{
  /**
   * A string of markdown text
   */
  text: string;
}

/**
 * Display markdown parsed to html
 * TODO: Use domPurify to sanitize the output HTML
 */
export const MarkedEx : Component<Attrs> = {
view: ({attrs}) => (m.trust(marked(attrs.text)))
}