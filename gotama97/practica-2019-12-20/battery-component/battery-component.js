import { html, LitElement } from 'lit-element';
import style from './battery-component-styles.js';
import '@vaadin/vaadin-select'

class BatteryComponent extends LitElement {
  static get properties() {
    return {
      level:Number,
      state:Function
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.state;
    this.level=0;

  }

  render() {
    return html`
   <div class="container">
   <div class="change">

<button type="button" @click="${this.charge}">CHARGE</button>
<button type="button" @click="${this.disconnect}">DISCONNECT</button>
<button type="button" @click="${this.discharge}">DISCHARGE</button>

</div>

<div class="battery">
  <div id="battery-level" class="battery-level">
    ${this.level}%
  </div>
</div></div>
      `;
    }
    discharge(){
      this.state = setInterval(() => {
        if(this.level>1&&this.level<100){
          this.level-=2;
          if(this.level<21&&this.level>0||this.level===0){
            this.shadowRoot.getElementById("battery-level").style.backgroundColor="#FF3333";
          }else if(this.level>21&&this.level<61){
            this.shadowRoot.getElementById("battery-level").style.backgroundColor="#FCD116";
          }else {
            this.shadowRoot.getElementById("battery-level").style.backgroundColor="#66CD00";
          }
        }
      }, 1000);
    }
charge(){
  this.state = setInterval(() => {
    if(this.level<99&&this.level>=0){
      this.level+=2;
        if(this.level<21&&this.level>0){
          this.shadowRoot.getElementById("battery-level").style.backgroundColor="#FF3333";
        }else if(this.level>21&&this.level<61){
          this.shadowRoot.getElementById("battery-level").style.backgroundColor="#FCD116";
        }else{
          this.shadowRoot.getElementById("battery-level").style.backgroundColor="#66CD00";
        }
    }
  }, 1000);
}

disconnect(){
  clearInterval(this.state);
}

}

window.customElements.define("battery-component", BatteryComponent);
