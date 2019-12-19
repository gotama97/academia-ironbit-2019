import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';
import '@catsys/contact-form';

class CreatePage extends PageDM {
  static get styles() {
      return css`
        .container {
          
        }
      `;
    }
    render() {
      return html`
      <section class="container">
        <contact-form @register-contact-request="${this.createContact}"></contact-form>
      </section>
    `;
    }

    createContact(event) {
      this.dispatchEvent(new CustomEvent('new-contact', {
        detail: event.detail
      }));
    }
}

window.customElements.define('create-page', CreatePage);
