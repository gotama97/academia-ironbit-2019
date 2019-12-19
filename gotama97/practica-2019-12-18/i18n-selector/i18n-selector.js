import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';
import '@vaadin/vaadin-select/vaadin-select'

class I18nSelector extends LitElement {

  static get styles() {
    return style;
  }


  render() {
    return html`
        <h2>i18n-selector</h2>
      <vaadin-select @change="${this.changeLeng}" label="pick a lenguage">
        <template>
    <vaadin-list-box>
    <vaadin-item>Es</vaadin-item>
    <vaadin-item>En</vaadin-item>
    </vaadin-list-box>
        </template>
      </vaadin-select>
      `;
    }

    changeLeng(){
      
    }
}

window.customElements.define("i18n-selector", I18nSelector);
