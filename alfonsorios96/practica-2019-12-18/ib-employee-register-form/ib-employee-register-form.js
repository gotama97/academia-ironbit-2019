import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';

class IbEmployeeRegisterForm extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hola que tal';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} ib-employee-register-form</h2>
      `;
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
