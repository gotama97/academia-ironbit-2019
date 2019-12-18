import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-form-styles.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-icons';
import '@polymer/paper-card';


class IbEmployeeRegisterForm extends LitElement {
  static get properties() {
    return {
      id: Number,
      name: String,
      firstName: {
        type: String,
        attribute: 'first-name' 
      },
      lastName: {
        type: String,
        attribute: 'last-name' 
      },
      startingDay: Number,
      schema: String,
      company: String,
      status: Boolean,
      socialName: String,
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.id = 0;
    this.name = '';
    this.firstName = '';
    this.lastName = '';
    this.startingDay = 0;
    this.schema = '';
    this.company = '';
    this.status = true;
    this.socialName = '';
  }
  

  render() {
    return html`
      <paper-card>
          <div class="card-content">
            <vaadin-text-field id="employee-id" label="Número de empleado"></vaadin-text-field>
            <vaadin-text-field id="name" label="Nombre (s)"></vaadin-text-field>
            <vaadin-text-field id="last-name-father" label="Apellido paterno"></vaadin-text-field>
            <vaadin-text-field id="last-name-mother" label="Apellido materno"></vaadin-text-field>
            <div class="group">
              <div>
                <vaadin-date-picker id="date" label="Fecha de ingreso"></vaadin-date-picker>
                <vaadin-select id="schema" label="Esquema"></vaadin-select>
              </div>
              <div>
                <vaadin-select id="bill-company" label="Empresa facturadora"></vaadin-select>
                <vaadin-select id="status" label="Estatus"></vaadin-select>
              </div>
            </div>
            <div>
              <vaadin-select id="social-name" label="Razón social"></vaadin-select><iron-icon icon="vaadin:plus-circle"></iron-icon>
            </div>
          </div> 
          <vaadin-button @click=${this.employeeRegisterRequest} theme="primary">Ingresar</vaadin-button>
      </paper-card>
    `;}

    employeeRegisterRequest(){
      const employeeIdNode = this._getNode('#employee-id');
      const nameNode = this._getNode('#name');
      const lastNameFatherNode = this._getNode('#last-name-father');
      const lastNameMotherNode = this._getNode('#last-name-mother');
      const dateNode = this._getNode('#date');
      const schemaNode = this._getNode('#schema');
      const billCompanyNode = this._getNode('#bill-company');
      const statusNode = this._getNode('#status');
      const socialNameNode = this._getNode('#social-name');
      const employee = {
        employeeId: employeeIdNode.value,
        name: nameNode.value,
        'last Name Father': lastNameFatherNode.value,
        'lastNameMother': lastNameMotherNode.value,
        date: dateNode.value,
        schema: schemaNode.value,
        'Bill Company': billCompanyNode.value,
        status: statusNode.value,
        'Social Name': socialNameNode.value,
      };

      this.dispatchEvent(new CustomEvent('employeeRegisterRequest', {
        detail: employee
      }));

      employeeIdNode.value = '';
      nameNode.value = '';
      lastNameFatherNode.value = '';
      lastNameMotherNode.value = '';
      dateNode.value = '';
      schemaNode.value = '';
      billCompanyNode.value = '';
      statusNode.value = true;
      socialNameNode.value = '';
    }

    _getNode(query) {
      return this.shadowRoot.querySelector(query);
    }
}

window.customElements.define("ib-employee-register-form", IbEmployeeRegisterForm);
