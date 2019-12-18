import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field';

export class MyFirstComponent extends LitElement {
    constructor(){
        super();
        this.title = 'Qué tranza, mundo, soy una propiedad'
        this.table = [];
        this.multipliers = [];
        this.to = 0;
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }

    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            title: {
                type: String
            },
            table: {
                type: Array
            },
            multipliers: {
                type: Array
            },
            a: {
                type: Number
            },
            b: {
                type: Number
            },
            c: {
                type: Number
            }
        };
    }

    static get styles() {
        return css`
            h2 {
                color: blue;
            }
            
            table {
                border: 1px solid black;
            }
        `;
    }

    sum(){
        this.c = Number(this.a) + Number(this.b);
    }

    multiplyTable(){
        this.table = [];
        const number = this.c;
        for(let i = 1; i <= this.to; i++){
            this.table = [...this.table, number * i]
        }
    }

    aChanged(event){
        this.a = event.target.value;
        this.sum();
        this.multiplyTable();
    }

    bChanged(event){
        this.b = event.target.value;
        this.sum();
        this.multiplyTable();
    }

    toChanged(event){
        this.multipliers = [];
        this.to = event.target.value;
        for(let i = 1; i <= this.to; i++){
            this.multipliers = [...this.multipliers, i];
        }
        this.multiplyTable();
    }
    

    render() {
        return html`
        <h1>${this.title}</h1>
        
        <vaadin-text-field placeholder="a" @input="${this.aChanged}"></vaadin-text-field>
        <vaadin-text-field placeholder="b" @input="${this.bChanged}"></vaadin-text-field>
        <vaadin-text-field placeholder="to"  @input="${this.toChanged}"></vaadin-text-field>
        <table>
            <thead>
            ${this.multipliers.map(number => html`<th>${number}</th>`)}
        </thead>
            <tbody>
                <tr>
                    ${this.table.map(number => html`<td>${number}</td>`)}
                </tr>
            </tbody>
        </table>
        `
   }
}
customElements.define('my-first-component', MyFirstComponent);