import {LitElement, html, css} from 'lit-element';

import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';

import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/paper-card/paper-card.js';
class LoginComponent extends LitElement{
    static get properties(){
        return{
            img : String,
            userName : String,
            password : String
        }
    }

    static get styles() {
        return css`
            .header iron-image{
                display: flex;
                width: %;
                
            }
            .card-content {
                padding: 10px;
            }
        `;
    }

    constructor(){
        super();
        this.img  =""
        this.userName = "";
        this.password = "";
    }
    render(){
        return html`
        <paper-card image="${this.img}" >
            <div class="card-content">
                <vaadin-text-field   placeholder="Elena Torres"></vaadin-text-field>
                <br>
                <vaadin-password-field label="Password"></vaadin-password-field>

            </div>
            <div class="card-actions">
                <vaadin-button theme="primary">Ingresar</vaadin-button>
            </div>
        </paper-card>
        `
    }
}
customElements.define('login-component',  LoginComponent);
