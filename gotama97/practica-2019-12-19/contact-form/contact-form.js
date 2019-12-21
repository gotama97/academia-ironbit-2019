import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-button'


class ContactForm extends LitElement {
  static get properties() {
    return {
      gendesCatalog: Array,
      bloodTypeCatalog: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.gendesCatalog = [
      {
        label: 'masculino',
        value: 'H'
      },
      {
        label: 'femenino',
        value: 'F'
      }
    ];
    this.bloodTypeCatalog = [
      {
        label: 'o-',
        value: 'o-'
      },
      {
        label: 'a+',
        value: 'a+'
      }, {
        label: 'o+',
        value: 'o+'
      }
    ]
  }

  render() {
    return html`
    <div class=container>
      <vaadin-text-field id="name" placeholder="nombre" label="nombre"></vaadin-text-field>
      <vaadin-text-field id="lastName" placeholder="apellido" label="apellido" ></vaadin-text-field>
      <vaadin-combo-box id="gender" .items="${this.gendesCatalog}" placeholder="sexo" label="sexo"></vaadin-combo-box>
      <vaadin-text-field id="nss" placeholder="NSS" label="NSS" ></vaadin-text-field>
      <vaadin-combo-box id="bloodType" .items="${this.bloodTypeCatalog}" placeholder="tipo de sangre" label="tipo de sange"></vaadin-combo-box>
<vaadin-text-field id='phone' placehole="telefono" label="telefono" ></vaadin-text-field>
<vaadin-text-fiel id="address" placeholder="Direccion" label="Direccion"></vaadin-text-fiel>
<vaadin-text-field id='email' placehole="correo elecronico" label="correo electronico" ></vaadin-text-field>
<vaadin-text-field id='curp' placehole="curp" label="curp" ></vaadin-text-field>
<vaadin-text-field id='rfc' placehole="rfc" label="rfc" ></vaadin-text-field>
<vaadin-button @click="${this.addSkill}">nueva habilidad</vaadin-button>
    </div>
    <div id="skillsContainer" class="container">

    </div>
    <vaadin-button @click="${this.saveContact}">guardar</vaadin-button>
      `;
  }

  addSkill() {
    const container = this.shadowRoot.querySelector('#skillsContainer');
    container.innerHTML += `<vaadin-text-field class="skill" placeholder="habilidad" ></vaadin-text-field>`;
  }

  saveContact() {
    const name = this.shadowRoot.querySelector('#name');
    const lastName = this.shadowRoot.querySelector('#lastName');
    const gender = this.shadowRoot.querySelector('#gender');
    const nss = this.shadowRoot.querySelector('#nss');
    const bloodType = this.shadowRoot.querySelector('#bloodType');
    const phone = this.shadowRoot.querySelector('#phone');
    const address = this.shadowRoot.querySelector('#address');
    const email = this.shadowRoot.querySelector('#email');
    const curp = this.shadowRoot.querySelector('#curp');
    const rfc = this.shadowRoot.querySelector('#rfc');

    const skills = this.shadowRoot.querySelectorAll('.skill');
    const newSkill = []

    for (const skill of skills) {
      newSkill.push(skill.value);
      skill.parentNode.removeChild(skill);
    }

    this.dispatchEvent(new CustomEvent('register-contact-request', {
      detail: {
        name: name.value,
          lastName: lastName.value,
          gender: gender.value,
          nss: nss.value,
          bloodType: bloodType.value,
          phone: phone.value,
          address: address.value,
          email: email.value,
          curp: curp.value,
          rfc: rfc.value,
          skills: newSkills
      }
    }));
    name.value = '';
    lastName.value = '';
    gender.value = '';
    nss.value = '';
    bloodType.value = '';
    phone.value = '';
    address.value = '';
    email.value = '';
    curp.value = '';
    rfc.value = '';
  }
}

window.customElements.define("contact-form", ContactForm);
