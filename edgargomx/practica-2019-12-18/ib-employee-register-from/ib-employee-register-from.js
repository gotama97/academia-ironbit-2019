import { html, LitElement } from 'lit-element';
import style from './ib-employee-register-from-styles.js';
import '@vaadin/vaadin-text-field/vaadin-number-field';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@vaadin/vaadin-select/vaadin-select'

class IbEmployeeRegisterFrom extends LitElement {
  static get properties() {
    return {
      employeeData: { type: Object }
    };
  }

  static get styles() {
    return style;
  }

  render() {
    return html`
      <div class="content-col-center">
        <h2>Registo Empleados</h2>
        <div class="content-col-left">
          <div>
            <label>Número de empleado: </label>
            <vaadin-number-field  id="number_employee"></vaadin-number-field>
          </div>
          <div>
            <label>Nombre (s): </label>
            <vaadin-text-field  id="name"></vaadin-text-field>
          </div>
          <div>
            <label>Apellido Paterno: </label>
            <vaadin-text-field id="firstname" ></vaadin-text-field>
          </div>
          <div>
            <label>Apellido Materno: </label>
            <vaadin-text-field id="secondname" ></vaadin-text-field>
          </div>
          <section class="content-row-center">
            <div>
              <label>Fecha Ingreso: </label>
              <vaadin-date-picker  id="datein"></vaadin-date-picker>
            </div>
            <div>
              <label>Esquema: </label>
              <vaadin-select id="schema" >
                <template>
                  <vaadin-list-box>
                    <vaadin-item>Nomina</vaadin-item>
                    <vaadin-item>Mixto</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
            </div>
          </section>
          <div class="content-row-center">
            <div>
              <label>Empresa facturadora: </label>
              <vaadin-select id="enterprise" >
                <template>
                  <vaadin-list-box>
                    <vaadin-item>IronBit</vaadin-item>
                    <vaadin-item>BBVA</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
            </div>
            <div>
              <label>Estatus: </label>
              <vaadin-select  id="status">
                <template>
                  <vaadin-list-box>
                    <vaadin-item>Activo</vaadin-item>
                    <vaadin-item>Inactivo</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
            </div>
          </div>
            <div>
              <label>Razon Social: </label>
              <vaadin-select id="social" >
                <template>
                  <vaadin-list-box>
                    <vaadin-item>IronBit</vaadin-item>
                    <vaadin-item>People</vaadin-item>
                    <vaadin-item>Banco</vaadin-item>
                  </vaadin-list-box>
                </template>
              </vaadin-select>
            </div>
        </div>
        
        <vaadin-button theme="primary" @click="${this.registerEmployee}" >Agregar</vaadin-button>
       
      </div>
        
      `;
    }

    registerEmployee() {
      
      const number = this.getDataNode('#number_employee');
      const name = this.getDataNode('#name');
      const firstname = this.getDataNode('#firstname');
      const secondname = this.getDataNode('#secondname');
      const datein = this.getDataNode('#datein');
      const schema = this.getDataNode('#schema');
      const enterprise = this.getDataNode('#enterprise');
      const status = this.getDataNode('#status');
      const social =this.getDataNode('#social');
      const employeeData = {
        number: number.value,
        name: name.value,
        firstname: firstname.value,
        secondname: secondname.value,
        datein: datein.value,
        schema: schema.value,
        enterprise: enterprise.value,
        status: status.value,
        social: social.value
      };

      this.dispatchEvent(new CustomEvent('login-request', {
        detail: employeeData
      }));
      number.value = '';
      name.value = '';
      firstname.value = '';
      secondname.value = '';
      datein.value = '';
      schema.value = '';
      enterprise.value = '';
      status.value = '';
      social.value = '';
    }

    getDataNode(property) {
      return this.shadowRoot.querySelector(property);
    }
}

window.customElements.define("ib-employee-register-from", IbEmployeeRegisterFrom);
