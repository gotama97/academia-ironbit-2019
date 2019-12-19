import {LitElement , html , css} from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field';
import '@vaadin/vaadin-button';
import '@polymer/paper-card';

class IbLogin extends LitElement{
    static get properties() {
        return {
            logo: String,
            username: String,
            password: String
        }
    }

    static get styles() {
        return css`
            .card-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .card-content img{
                padding-bottom: 68px;
            }

            .card-content vaadin-text-field{
                padding-bottom: 22px;
            }

            .card-content vaadin-password-field{
                padding-bottom: 57px;
            }
        `;
    }

    constructor(){
        super();
        this.logo = '';
        this.username = '';
        this.password = '';
    }

    render(){
        return html`
            <paper-card>
                <div class="card-content">
                    <img src="${this.logo}" alt="Ironbit Logo"/>
                    <vaadin-text-field placeholder="Elena Torres"></vaadin-text-field>
                    <vaadin-password-field placeholder="******"></vaadin-password-field>
                    <vaadin-button theme="secondary">Ingresar</vaadin-button>
                </div> 
            </paper-card>
        `;
    }
}

customElements.define('ib-login', IbLogin);