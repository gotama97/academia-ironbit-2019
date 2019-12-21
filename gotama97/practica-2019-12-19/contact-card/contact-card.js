import { html, LitElement } from 'lit-element';
import style from './contact-card-styles.js';
import '@polymer/paper-card/'

class ContactCard extends LitElement {
  static get properties() {
    return {
      contact:Object
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.contact = {
      skills:[]
    }
  }

  render() {
    return html`
    <custom-style>
      <style>
        paper-card{
          width:400px,
          --paper-card-header-image{
            height:300px;
          };
        }

      </style>
    </custom-style>
  <paper-card heading="${this.contact.name}" image="${this.contact.image}" alt="${this.contact.name}">
    <div class="card-content">
    <ul>
            <li>Nombre: ${this.contact.name} ${this.contact.lastName}</li>
            <li>Telefono: ${this.contact.phone}</li>
            <li>Sexo: ${this.contact.gender}</li>
            <li>Direccion: ${this.contact.address}</li>
            <li>Correo: ${this.contact.email}</li>
            <li>NSS: ${this.contact.nss}</li>
            <li>RFC: ${this.contact.rfc}</li>
            <li>Tipo Sanguineo: ${this.contact.bloodType}</li>
            <li>CURP${this.contact.curp}</li>
            <p>Habilidades</p>
              ${this.contact.skills.map(skill => html`<span>${skill}</span>`)}
          </ul>
  </div>
      <div class="card-action">
        <button>share</button>
        <button>explore</button>
      </div>
  </paper-card>
      `;
    }
}

window.customElements.define("contact-card", ContactCard);
