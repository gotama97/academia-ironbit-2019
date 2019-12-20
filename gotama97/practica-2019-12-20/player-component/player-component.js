import { html, LitElement } from 'lit-element';
import style from './player-component-styles.js';

class PlayerComponent extends LitElement {
  static get properties() {
    return {
      song:String
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.song='./../song.mp3'
  }

  render() {
    return html`
        <audio controls>
        <source src="${this.song}" type="audio/mpeg">
          </audio>
      `;
    }
}

window.customElements.define("player-component", PlayerComponent);
