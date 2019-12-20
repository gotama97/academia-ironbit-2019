import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

class ListPage extends PageDM {

  static get properties(){
    return {
      contacts:Array
    }
  }
  constructor(){
    super();
    this.contacts=[];
  }

    render() {
      return html`
      <section>
        ${this.contacts.map(contact => html `<contact-card .contact="${contact}"></contact-card>`)}
      </section>
    `;
    }
}

window.customElements.define('list-page', ListPage);
