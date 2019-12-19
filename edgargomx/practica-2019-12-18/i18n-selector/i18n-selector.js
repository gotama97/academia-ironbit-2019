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
    console.log('constructor', this.languages)
  }

  async render() {
    /*let langs = [];
    for (const lang in language) {
      if (language.hasOwnProperty(lang)) {
        langs = [...langs, html`<vaadin-item value="${ lang }">${ language[lang].nameLang }</vaadin-item>`];
      }
    }*/
    const arrayLangs = Array.from(this.languages);
    console.log(arrayLangs);
    return html`
        <h2>i18n-selector</h2>
        <div class="container-col-center">
            <label>Lenguaje: </label>
            <vaadin-select  id="language" @change="${ this.changeLanguage }">
              <template>
                <vaadin-list-box>
                  ${ arrayLangs.map((lang, index) => html`<vaadin-item value="${ index }">${ lang.nameLang }</vaadin-item>`) }
                </vaadin-list-box>
              </template>
            </vaadin-select>
        </div>

      `;
  }

 /* async transformToMap(){
    console.log("to map")
    this.languages = await new Map(Object.entries(language))
  }*/

  changeLanguage(event) {
    console.log(language)
    const languageSelected = event.target.value
    const langugeMap = new Map(Object.entries(language[ languageSelected ]));
    this.dispatchEvent(new CustomEvent('i18nEvent', { detail: langugeMap }))
  }
}

window.customElements.define("i18n-selector", I18nSelector);
