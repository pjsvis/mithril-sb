/** @jsx m */
import m, {Component} from 'mithril';

interface Attrs{
  imageUrl: string;
  title: string;
  date: string;
  bodyText: string;
  linkText: string;
  linkUrl: string;
}
export const Card: Component<Attrs> = {
  view: ({attrs}) => (
    [
        m("div.uk-card.uk-card-default",
          [
            m("div.uk-card-header", 
              m(".uk-grid-small.uk-flex-middle.uk-grid[uk-grid='']",
                [
                  m("div.uk-width-auto.uk-first-column", 
                    m("img.uk-border-circle[width='40'][height='40'][src='https://getuikit.com/docs/images/avatar.jpg']")
                  ),
                  m("div.uk-width-expand",
                    [
                      m("h3.uk-card-title.uk-margin-remove-bottom", 
                        attrs.title
                      ),
                      m("p.uk-text-meta.uk-margin-remove-top", 
                        m("time[datetime='2016-04-01T19:00']", 
                          "April 01, 2016"
                        )
                      )
                    ]
                  )
                ]
              )
            ),
            m("div.uk-card-body f6", 
              m("p", 
                attrs.bodyText
              )
            ),
            m("div.uk-card-footer", 
              m("a.uk-button.uk-button-text[href='#']", 
                "Read more"
              )
            )
          ]
        ), 
        m("style", 
          " @import \"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.css\" "
        )
      ]
  ),
};

