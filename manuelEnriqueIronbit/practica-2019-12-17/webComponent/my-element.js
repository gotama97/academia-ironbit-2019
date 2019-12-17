import {LitElement , html } from 'lit-element'

class MyElement extends LitElement{
    constructor(){
        super();
        this.title = `Hola mundo desde LitElement`;
        this.a = 0;
        this.b = 0;
        this.c = 0;
    }
    render(){
        return html`
        <h2>${this.title}</h2>
        
        <p>${this.c}</p>
        <table border="1px">
            <thead>
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
            </thead>
            <tbody>
                <tr>
                    ${this.multiplyTable(this.c)
                        .map(element => html`<td>${element}</td>`)}
                </tr>
            </tbody>
        </table>
        `};
    sum(){
        this.c = this.a + this.b;
    }
    multiplyTable(){
        let table=[];
        let number = this.c;
        for(let i = 1 ; i<=10 ; i++){
            table=[...table , i*number];
        }
        return table;
    }
}

window.customElements.define('my-element', MyElement);