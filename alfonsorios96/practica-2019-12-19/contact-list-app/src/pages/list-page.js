import {html} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';
import '@catsys/contact-card';

class ListPage extends PageDM {
    static get properties() {
        return {
            contacts: Array
        };
    }

    constructor(){
        super();
        this.contacts = [];
    }

    render() {
      return html`
        <section class="container">
            ${this.contacts.map(contact => html`<contact-card .contact="${contact}"></contact-card>`)}
        </section>
      `;
    }
}

window.customElements.define('list-page', ListPage);
