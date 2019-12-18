import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-integer-field';

export class MyElement extends LitElement {

    static get properties() {
        return {
            title: String,
            init: Number,
            numbers: Array,
            a: Number,
            b: Number
        }
    }

    static get styles() {
        return css`
            h2 {
                font-family: Arial, Helvetica, sans-serif;
                color: blue;
                text-transform: uppercase;
            }

            table {
                border: 2px solid grey;
            }

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `;
    }

    constructor(){
        super();
        this.init = 1;
        this.numbers = Array.from({length: 10}, () => this.init++)
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }

    updated(_changedProperties){
        if (_changedProperties.has('a') || _changedProperties.has('b')) {
            this.c = Number(this.a) + Number(this.b);
            this.multiplyTable();
        }
        
        
    }

    render() {
        return html`
            <div>
                <h2>${ this.title }</h2>
                <vaadin-integer-field type="number" @input="${ this.aChange }" placeholder="A"></vaadin-integer-field>
                <vaadin-integer-field type="number" @input="${ this.bChange }" placeholder="B"></vaadin-integer-field>
                <p>${ this.c }</p>
                <table>
                    <thead>
                        ${ this.numbers.map(element => html`<td>${ element }</td>`) }
                    </thead>
                    <tbody>
                        <tr>
                            ${ this.multiplyTable().map( element => html`<td>${ element }</td>`) }
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    multiplyTable() {
        return this.numbers.reduce((acc, currentNumber) => [...acc, currentNumber * this.c], [])
    }

    aChange(event){
        this.a = event.target.value;
    }

    bChange(event, property){
        this.b = event.target.value;
    }


}

window.customElements.define('my-element', MyElement);