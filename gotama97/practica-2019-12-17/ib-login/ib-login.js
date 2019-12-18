import {LitElement,html,css} from 'lit-element'
import '@vaadin/vaadin-text-field/vaadin-password-field'
import '@vaadin/vaadin-text-field/vaadin-email-field'
import '@vaadin/vaadin-button/vaadin-button'
import '@polymer/paper-card/paper-card.js';

class IbLogin extends LitElement{
    constructor(){
        super();
        this.user= '';
        this.pass='';
    }

    static get properties(){
        return{
            user:String,
            pass:String
        }
    }

    static get styles(){
        return css`
        .container, .paper-container{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin :10px;
        }
        `
    }


    render(){
        return html `
<div class="container">
<paper-card>
<div class="paper-container">
<img src="./logo.png">
    <vaadin-text-field placeholder="user"></vaadin-text-field>
    <vaadin-password-field placeholder="password"></vaadin-password-field>
    <vaadin-button theme="primary">ingresar</vaadin-button>
</div>
</paper-card>
</div>

`;
    }
}

window.customElements.define('ib-login',IbLogin);