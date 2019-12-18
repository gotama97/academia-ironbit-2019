import {LitElement, html} from 'lit-element';

class MyElement extends LitElement{
    constructor(){
        super();
        this.a = 0;
        this.b = 0;
        this.c= 0;
    }

    render(){
        return html`
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
                <tr>
                    ${this.multiplyNumber(7).map((numbers)=>{
                        return html `<td>${}</td>`
                    })}
                </tr>
            </table>
        `;
    }

    suma(){
        this.c = Number(this.a)+Number(this.b);
    }

    multiplyNumber(number){
        this.numbers = [];

        for(const i =0;i<=10;i++){
            this.numbers = [...this.numbers,(number*i)]
        }
    }
}

window.customElements.define('my-element',MyElement);