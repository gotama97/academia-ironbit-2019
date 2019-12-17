import {LitElement, html} from 'lit-element';

import '@vaadin/vaadin-text-field/vaadin-text-field';
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
            <vaadin-text-field label="Username">Elena Torres</vaadin-text-field>
            <vaadin-text-field placeholder="*****"></vaadin-text-field>

        </div>
        <div class="card-actions">
        <vaadin-button theme="secondary">Ingresar</vaadin-button>
        </div>
        </paper-card>
        `
    }
}
customElements.define('login-component',  LoginComponent);
