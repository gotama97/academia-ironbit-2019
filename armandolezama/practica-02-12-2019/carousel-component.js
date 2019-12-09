import { LitElement, html } from 'lit-element';

export class CarouselComponent extends LitElement {

    static styles = css `
    :host {
        display: block;
    }
    `;

    render() {
        return html ``;
    }
}
customElements.define('carousel-component', CarouselComponent);