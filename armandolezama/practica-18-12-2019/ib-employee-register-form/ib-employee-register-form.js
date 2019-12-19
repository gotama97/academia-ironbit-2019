import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@vaadin/vaadin-button/vaadin-button';
import '@polymer/paper-card/paper-card';


class IbEmployeeRegisterForm extends LitElement {

  static get styles() {
    return style;
  }

  _getNode(query){
    return this.shadowRoot.querySelector(query)
  }

  saveData(){
    this.dispatchEvent(new CustomEvent('employee-register-request', {
      detail: {
        employeeRegister: {
          empolyeeNumber: this._getNode('#employee-number').value,
          name: this._getNode('#name').value,
          lastName: this._getNode('#last-name').value,
          mothersLastName: this._getNode('#mothers-last-name').value,
          dateOfAdmission: this._getNode('#date-of-admission').value,
          billingCompany: this._getNode('#billing-company').value,
          bussinesName: this._getNode('#busine-name').value,
          scheme: this._getNode('#scheme').value,
          status: this._getNode('#status').value
        }}
    }))
  }


  render() {
    return html`
      <paper-card>
        <section id="main-paper-card">
          <paper-card class="secondary-card">
            <div>
              <h3>Modificar empleado</h3>
            </div>
            <div>
              <p>Número de empleado</p><vaadin-text-field id="employee-number"></vaadin-text-field>
            </div>
            <div>
              <p>Nombre (s)</p><vaadin-text-field id="name"></vaadin-text-field>
            </div>
            <div>
              <p>Apellido paterno</p><vaadin-text-field id="last-name"></vaadin-text-field>
            </div>
            <div>
              <p>Apellido materno</p><vaadin-text-field id="mothers-last-name"></vaadin-text-field>
            </div>
          </paper-card>
          <paper-card class="secondary-card">
            <div>
              <p>Fecha de ingreso</p><vaadin-date-picker id="date-of-admission"></vaadin-date-picker>
            </div>
            <div>
              <p>Empresa facturadora</p><vaadin-select id="billing-company"></vaadin-select>
            </div>
            <div>
              <p>Razón social</p><vaadin-select id="busine-name"></vaadin-select>
            </div>
            <div>
              <p>Esquema</p><vaadin-select id="scheme"></vaadin-select>
            </div>
            <div>
              <p>Estatus</p><vaadin-select id="status"></vaadin-select>
            </div>
          </paper-card>
        </section>
        <section>
          <vaadin-button @click="${this.saveData}">Guardar</vaadin-button>
        </section>
      </paper-card>
      `;
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
