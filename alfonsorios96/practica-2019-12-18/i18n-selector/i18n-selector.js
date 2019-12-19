import { html, LitElement } from 'lit-element';
import style from './i18n-selector-styles.js';
import '@vaadin/vaadin-combo-box';

class I18nSelector extends LitElement {
  static get properties() {
    return {
      data: { type: Object },
      languages: { type: Map }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.data = {};
    this.languages = new Map();
  }

  firstUpdated(){
    const select = this.shadowRoot.querySelector('vaadin-combo-box');
    select.items = [
      {'label': 'Español', 'value': 'es'},
      {'label': 'English', 'value': 'en'},
      {'label': 'Français', 'value': 'fr'}
    ];
  }

  updated(propertiesChanged) {
    if(propertiesChanged.has('data')){
      this.dispatchEvent(new Event('i18n-selector-ready'));
      const select = this.shadowRoot.querySelector('vaadin-combo-box');
      select.disabled = false;
    }
  }

  render() {
    return html`
        <vaadin-combo-box 
          label="Idioma" 
          placeholder="Selecciona idioma"
          @selected-item-changed="${this.langSelected}"
          disabled>
        </vaadin-combo-box>
      `;
    }

    langSelected(event) {
      const lang = event.detail ? event.detail.value.value : event;

      if(this.languages.has(lang)) {
        this.dispatchEvent(new CustomEvent('lang-selected', {
          detail: this.languages.get(lang)
        }));
      } else if(this.data[lang]) {
        this.languages.set(lang, new Map(Object.entries(this.data[lang])));
        this.langSelected(lang);
      } else {
        this.dispatchEvent(new Event('language-not-found'));
      }
    }
}

window.customElements.define('i18n-selector', I18nSelector);
