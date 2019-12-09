import { LitElement, html } from 'lit-element';

export class FrogComponent extends LitElement {

    constructor() {
        super();        
        this.__frogPosition = 0;
        this.__skipPlaces = 1;
        this.__sheets = 4;
        this.__goForward = true;
        this.__sheetsHTML = [];
    }

    static get properties() {
        return {
            __frogPosition: {
                type: Number
            },
            __skipPlaces: {
                type: Number
            },
            __sheets: {
                type: Number
            },
            __goForward: {
                type: Boolean
            },
            __sheetsHTML: {
                type: Array
            }
            
        };
    }
    
    setSheets(sheetsValue){

        if(sheetsValue > 2){
            this.__sheets = sheetsValue;
        } else {
            console.error('Sheets minor than two');
        }
    }
    setSkipPlaces(jump){
        this.__skipPlaces = jump;
    }

    moveFrog(){
        this.__shouldGoForward()
        console.info(`initial ${this.__frogPosition}`)
        if(this.__goForward){
            this.__frogPosition += this.__skipPlaces
            this.__frogPosition > this.__sheets ? this.__frogPosition -= this.__frogPosition - (this.__frogPosition - this.__sheets): this.__frogPosition
        } else {
            this.__frogPosition -= this.__skipPlaces
            this.__frogPosition < 0 ? this.__frogPosition *= -1 : this.__frogPosition
        }
        console.info(`final ${this.__frogPosition}`)
    }

    __shouldGoForward(){
        if(this.__frogPosition >= this.__sheets){
            this.__goForward = false;
        } else if(this.__frogPosition <= 0) {
            this.__goForward = true;
        };
    }

    firstUpdated(changedProperties) {
        this.__sheetsHTML = [];
        for(let i = 0; i <= this.__sheets; i++){
            this.__sheetsHTML = [...this.__sheetsHTML, `hoja`]
        }
        
     }
    
    
    render() {
        return html`
         ${this.__sheetsHTML.map((item) => html`<div class="sheet">
                ${item}
            </div>`)}
        `;
    }
}
customElements.define('frog-component', FrogComponent);