import {LitElement, html,css} from 'lit-element';

import '@vaadin/vaadin-text-field/vaadin-text-field'

class MyElement extends LitElement{
    constructor(){
        super();
        this.a = 0;
        this.b = 0;
        this.c= 0;
        this.numbers = [];
        this.title='HOLA SUMA';
    }
    static get properties() {
        return {
            numbers: Array,
            title: String,
            a: Number,
            b: Number,
            c: Number
        }
    }

    static get styles(){
        return css`
            h2 {
                color: blue;
            }
        `;
    }

    render(){
        return html`

        <h2>${this.title}</h2>
        
        <vaadin-text-field placeholder="a" @input="${this.aChanged}"></vaadin-text-field>
        <vaadin-text-field placeholder="b" @input="${this.bChanged}"></vaadin-text-field>
            <table>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                </tr>
                <tbody>
                    <tr>
                        ${this.suma()}
                    ${this.numbers.map(number => html`<td>${number}</td>`)}
                    </tr>
                </tbody>
            </table>`
    }

    suma(){
        this.c=Number(this.a) + Number(this.b);
        this.multiplyNumber();
    }
    

    multiplyNumber(){
        this.numbers = [];

        for(let i =1;i<=10;i++){
            this.numbers = [...this.numbers,(this.c*i)]
        }
    }
    aChanged(event){
        this.a =event.target.value;
        console.log(event.target.value);
        this.suma();
        
    }

    bChanged(event){
        this.b = event.target.value;
        console.log(event.target.value);
        this.suma();
    }

 
}

window.customElements.define('my-element',MyElement);