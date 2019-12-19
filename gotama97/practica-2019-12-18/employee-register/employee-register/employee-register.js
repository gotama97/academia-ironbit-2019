import { html, LitElement } from 'lit-element';
import style from './employee-register-styles.js';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@vaadin/vaadin-select/vaadin-select'
import '@vaadin/vaadin-button/vaadin-button'

class EmployeeRegister extends LitElement {

  static get styles() {
    return style;
  }

  render() {
    return html`
     <div class="container">
     <div class="header">
        <h3>Registro de Empleados</h3>
        </div>

        <div class="row">
          <div class="column">
          <vaadin-text-field id="num-employee" label="Numero de Empleado"></vaadin-text-field>
        <vaadin-text-field id="names" label="Nombre(s)"></vaadin-text-field>
        <vaadin-text-field id="last-name1" label="Apellido Paterno"></vaadin-text-field>
        <vaadin-text-field id="last-name2" label="Apellido Materno"></vaadin-text-field>
        <vaadin-date-picker id="date" label="Fecha de Ingreso"></vaadin-date-picker>
        <vaadin-select id="company-name" label="Empresa Facturadora">
        <template>
    <vaadin-list-box>
      <vaadin-item>Televisa</vaadin-item>
      <vaadin-item>Google</vaadin-item>
    </vaadin-list-box>
  </template>
        </vaadin-select>
        <vaadin-select id="social-reason" label="Razon Social">
        <template>
    <vaadin-list-box>
      <vaadin-item>razon social 1</vaadin-item>
      <vaadin-item>razon social 2</vaadin-item>
    </vaadin-list-box>
  </template>
        </vaadin-select>
          </div>

          <div class=column>
        <vaadin-select id="scheme" label="Esquema">
        <template>
    <vaadin-list-box>
      <vaadin-item>mixto</vaadin-item>
      <vaadin-item>nominal</vaadin-item>
    </vaadin-list-box>
  </template>
        </vaadin-select>
        <vaadin-select id="status" label="Estatus">
        <template>
    <vaadin-list-box>
      <vaadin-item>activo</vaadin-item>
      <vaadin-item>des-activo</vaadin-item>
    </vaadin-list-box>
  </template>
        </vaadin-select>
          </div>
        </div>

        <div class="footer">
          <vaadin-button theme="primary" @click="${this.addRequest}">Agregar</vaadin-button>
        </div>
     </div>

      `;
  }

  addRequest(){
    let numEmployeeNode = this._getNode('#num-employee');
    let namesNode = this._getNode('#names');
    let lastName1Node= this._getNode('#last-name1');
    let lastName2Node = this._getNode('#last-name2');
    let dateNode = this._getNode('#date');
    let companyNameNode = this._getNode('#company-name');
    let socialReasonNode = this._getNode('#social-reason');
    let schemeNode = this._getNode('#scheme');
    let statusNode = this._getNode('#status');

    const employee = {
      numEmployee:numEmployeeNode.value,
      names:namesNode.value,
      lastName1:lastName1Node.value,
      lastName2:lastName2Node.value,
      date:dateNode.value,
      companyName : companyNameNode.value,
      socialReason : socialReasonNode.value,
      shceme:schemeNode.value,
      status:statusNode.value
    }

    this.dispatchEvent(new CustomEvent('add-request',{
      detail:employee
    }));

    numEmployeeNode.value='';
    namesNode.value='';
    lastName1Node.value='';
    lastName2Node.value='';
    dateNode.value='';
    companyNameNode.value='';
    socialReasonNode.value='';
    schemeNode.value='';
    statusNode.value='';
  }
  _getNode(query){
    return this.shadowRoot.querySelector(query);
  }
}

window.customElements.define("employee-register", EmployeeRegister);
