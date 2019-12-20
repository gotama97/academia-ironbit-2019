import { html, LitElement } from 'lit-element';
import style from './poc-component-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

class PocComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <custom-style>
          <style>

          </style>
        </custom-style>
        <vaadin-text-field label="aad" placeholder="aad"></vaadin-text-field>
      `;
    }
}

registerStyles('vaadin-text-field', css`
  [part="input-field"] {
      border: 1px solid gray;
    }
`);

window.customElements.define("poc-component", PocComponent);
