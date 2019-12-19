import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';
import '@vaadin/vaadin-select/vaadin-select';

class I18nSelector extends LitElement {

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.languages = new Map(Object.entries(language));
  }

   render() {
    return html`
        <div class="container-col-center">
            <legend>Lenguaje: </legend>
            <vaadin-select  id="language" @change="${ this.changeLanguage }" placeholder="Selecciona Idioma">
              <template>
                <vaadin-list-box>
                  ${ Array.from([...this.languages]).map((lang) => html`<vaadin-item value="${ lang[0] }">${ lang[1].nameLang }</vaadin-item>`) }
                </vaadin-list-box>
              </template>
            </vaadin-select>
        </div>
      `;
  }

  changeLanguage(event) {
    const languageSelected = event.target.value;
    const languageMap =  new Map(Object.entries(this.languages.get( languageSelected )));
    this.dispatchEvent(new CustomEvent('i18nEvent', { detail: languageMap }))
  }
}

window.customElements.define("i18n-selector", I18nSelector);
