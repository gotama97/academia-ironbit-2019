import { html, LitElement } from 'lit-element';
import style from './phone-component-styles.js';
import '@catsys/player-component'
import '@catsys/battery-component'


class PhoneComponent extends LitElement {
  static get properties() {
    return {
      cover:String
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.cover='./../cover.jpg'
  }

  render() {
    return html`

<article class="card">
  <header class="card__thumb">
  
    <img src="${this.cover}"/>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">We're on a highway to hell!</a></h2>
    <div class="card__subtitle"><player-component></player-component></div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
  
  <footer class="card__footer">
  <battery-component></battery-component>
   </footer>
</article>
`;
    }
}

window.customElements.define("phone-component", PhoneComponent);
