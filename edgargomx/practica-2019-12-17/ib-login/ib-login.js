import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field';
import '@polymer/paper-card/paper-card';
import '@vaadin/vaadin-button/vaadin-button.js';


export class IbLogin extends LitElement {
    constructor(){
        super();
        this.username = '';
        this.password = '';
        this.logoImg  = '';
        //this.logoImg  = 'data:image/png;base64,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';
    }

    static get properties() {
        return {
            username: String,
            password: String,
            logoImg: String,
        }
    }

    static get styles() {
        return css`
            .content, .card-content, .card-actions {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .content {
                padding: 80px;
            }
             img {
                 margin-bottom: 50px;
             }
        `;
    }

    

    render(){
        return html`
            <div class="content">       
                
                <paper-card>
                    <div class="card-content">
                        <img src="${ this.logoImg }" alt="logo" >
                        <vaadin-text-field @input="${ this.userChange }" placeholder="Elena Torres"></vaadin-text-field>
                        <vaadin-password-field @input="${ this.passChange }" placeholder="******"></vaadin-password-field>
                    </div>
                    <div class="card-actions">
                        <vaadin-button theme="primary" >Ingresar</vaadin-button>
                    </div>
                </paper-card>
            </div>
        `;
    }
}

window.customElements.define('ib-login', IbLogin);