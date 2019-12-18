import { LitElement, html, css } from 'lit-element';

export class I18NSelector extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html``;
    }
}
customElements.define('i18n-selector', I18NSelector);