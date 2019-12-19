import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-list-box/vaadin-list-box';
import '@vaadin/vaadin-item/vaadin-item';

export class I18NSelector extends LitElement {

    static get properties() {
        return {
            ISO: {type: Map},
            currentLang: {type: Map},
            message : {type: String},
            url: {type: String}
        };
    }

    constructor() {
        super();
        this.ISO = new Map;
        this.currentLang = new Map;
        this.message = 'Not language selected';
        this.url = '';
        this.data = '';
    }

    _setSelectAvaliable(){
        const select = this.shadowRoot.querySelector('vaadin-select');
        select.disabled = false;
    }

    _loadData(){
        (async () => {
            const response = await fetch(`../locals/languages.json`);
            const data = await response.json()
            return data;
            })().then(data => this.data = data); 
    }

    render() {
        return html`
        <vaadin-select placeholder="${this.message}" disabled="true">
            <template>
                <vaadin-list-box>
                    <vaadin-item>Español</vaadin-item>
                    <vaadin-item>English</vaadin-item>
                    <vaadin-item>Francais</vaadin-item>
                </vaadin-list-box>
            </template>
        </vaadin-select>
        `;
    }
}
customElements.define('i18n-selector', I18NSelector);