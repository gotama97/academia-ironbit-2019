import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/player-component'
import '@catsys/battery-component'


class PhoneComponent extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
  }

  render() {
    return html`
<div>
<battery-component></battery-component>
</div>

<div>
<player-component></player-component>
</div>
`;
    }
}

window.customElements.define("phone-component", PhoneComponent);
