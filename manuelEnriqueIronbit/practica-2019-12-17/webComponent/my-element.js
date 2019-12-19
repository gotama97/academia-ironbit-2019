import {LitElement, html, css} from "lit-element";

import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-ordered-layout';


class MyElement extends LitElement {
    static get properties() {
        return {
            table: Array,
            title: String,
            a: Number,
            b: Number,
            c: Number
        }
    }

    static get styles() {
        return css`
            h2 {
                color: blue;
            }
            
            vaadin-vertical-layout{
                display: block;
            }
            vaadin-horizontal-layout.multipliers div{
                width: 20px;
                border: 1px solid black;
                padding: 10px;
                background: #e3e3e3;
            }

            vaadin-horizontal-layout.result div{
                width: 20px;
                border: 1px solid black;
                padding: 10px;
                background: #77bf75;
            }
        `;
    }

    constructor() {
        super();
        this.table = [];
        this.title = '';
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }

    updated(_changedProperties) {
        if (_changedProperties.has('a') || _changedProperties.has('b')) {
            this.c = Number(this.a) + Number(this.b);
            this.multiplyTable();
        }
    }

    render() {
        return html`
            <h2>${this.title}</h2>  
            
            <vaadin-text-field placeholder="a" @input="${this.aChanged}"></vaadin-text-field>
            <vaadin-text-field placeholder="b" @input="${this.bChanged}"></vaadin-text-field>
            <vaadin-horizontal-layout class="multipliers">
                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => html`<div>${number}</div>`)}
            </vaadin-horizontal-layout>
            <vaadin-horizontal-layout class="result">
                ${this.table.map(number => html`<div>${number}</div>`)}
            </vaadin-horizontal-layout>
        `;
    }

    multiplyTable() {
        this.table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => number * this.c);
    }

    aChanged(event) {
        this.a = event.target.value;
    }

    bChanged(event) {
        this.b = event.target.value;
    }
}

customElements.define('my-element', MyElement);
