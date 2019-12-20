import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';
import '@catsys/contact-card'
import '@catsys/contact-form'

class DefaultPage extends PageDM {

    render() {
      return html`
       <section>
       <contact-form @register-contact-request="${this.createContact}"></contact-form>
       </section>
      `;
    }
    createContact(event) {
      this.dispatchEvent(new CustomEvent('new-contact', {
        detail: event.detail
      }));}
}

window.customElements.define('default-page', DefaultPage);
