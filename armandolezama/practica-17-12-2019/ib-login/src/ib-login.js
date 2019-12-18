import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field'
import '@vaadin/vaadin-button/vaadin-button'
import '@polymer/paper-card/paper-card'

export class IbLogin extends LitElement {

    constructor() {
        super();
        this.image = 'assets/LogoIB.png';
    }

    static get properties() {
        return {
            image: {type: String}
        };
    }

    static get styles() {
        return css`
        paper-card {
            --paper-card-header-image : {
                width: 100px;
                height: 10px;
            };

            display: inline-flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
        }
        img {
            width: 100px;
            heigth: 100px;
            margin: 0 auto;
        }
        #container {
            width: 100vw;
            height: 100vh;
            display: inline-flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
        }

        vaadin-text-field {
            margin: 12px;
        }

        vaadin-button {
            display: inline-flex;
            width: 160px;
        }
        `
    }

    render() {
        return html`
        <div id="container">
            <paper-card>
                <img src="assets/LogoIB.png" alt="IB Logo">
                <vaadin-text-field placeholder ="User Name"></vaadin-text-field>
                <vaadin-text-field placeholder ="Password"></vaadin-text-field>
                <vaadin-button>Ingresar</vaadin-button>
            </paper-card>
        </div>

        `;
    }
}
customElements.define('ib-login', IbLogin);