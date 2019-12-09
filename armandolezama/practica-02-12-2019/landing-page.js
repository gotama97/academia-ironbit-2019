import { LitElement, css, html } from 'lit-element';

export class LandingPage extends LitElement {

    constructor() {
        super();
        this.logged = false;
    }
    static get styles() {
        return css `
        #first-card {
            background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5c4787-c6f7-4db7-81b8-280107a1bf36/03152a25-43d0-48db-b503-93abc7ae20c7/MX-es-20191118-popsignuptwoweeks-perspective_alpha_website_medium.jpg'); 
            height: 628px;
            background-size: cover;
        }

        #header {
            display: flex;
            height: 36px;
        }

        #logo-section {
            margin-right: 38%; 
        }

        #login-section {
            margin-left: 38%; 
        }

        #logo {
              width: 108px;
              height: 32px;
              padding: 8px; 
          }

        #login {
            background-color: #e50914;
            width: 140px;
            height: 35px;
            padding: 7px 17px;
            font-weight: 400;
            font-size: 1rem;
            color: #ffffff;
            margin-top: 0.5rem;
            border-radius: 10px;
            border-color: #e50914;
          }

          #first-add {
              color: #ffffff;
              height: 268px;
              width: 640px;
              margin: 0 auto;
              text-align: center;
          }

          #main-add {
              font-size: 3.25rem
          }

          #secondary-add {
              font-size: 1.625rem;
          }

          #start-button {
            display: block;
            background-color: #e50914;
            width: 209px;
            height: 44px;
            padding: 7px 17px;
            font-weight: 400;
            font-size: 1rem;
            color: #ffffff;
            margin-top: 0.5rem;
            border-radius: 10px;
            margin: 0 auto;
            border-color: #e50914;
          }

          #second-add {
              width: 760px;
              height: 672px;
          }
        `;
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {

        };
    }
    render() {
        return html `
        <section id="main-page">
            <section id="first-card">
                <div id="header">
                    <div id="logo-section">
                        <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png">  
                    </div>
    
                    <div id="login-section">
                        <button id="login" @click="${this.logginLogout}">Iniciar sesión</button>
                    </div>
                </div>
                <article id="first-add">
                    <h1 id="main-add">Programas y películas sin límite y mucho más.</h1>
                    <h2 id="secondary-add">Disfruta donde quieras. Cancela en cualquier momento.</h2>
                    <button id="start-button">Comenzar Ahora ></button>
                </article>
            </section>
        </section>
        `;
    }
}
customElements.define('landing-page', LandingPage);