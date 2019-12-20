import {LitElement, html} from 'lit-element';

// These are the elements needed by this element.
import {styles} from './contact-list-styles.js';
import { fadeInTransitionPage } from './utils/contact-list-transitions.js';

import './pages/default-page.js';
import './pages/home-page.js';
import '@polymer/paper-button/paper-button.js';

class ContactList extends LitElement {
  static get properties() {
    return {
      appTitle: {type: String},
      _page: {type: String}
    };
  }

  static get styles() {
      return [
          styles,
          fadeInTransitionPage
        ];
    }

    firstUpdate(){
      fetch('https://randomuser.me/api/?resuls=10')
      .then(response => response.json())
      .then(data=>{
        this.contacts=data.results.map(user=>{
          return{
            name: user.name.first,
              lastName: user.name.last,
              phone: user.phone,
              gender: user.gender,
              address: user.location.street.name,
              email: user.email,
              nss: user.id.value,
              rfc: data.info.seed,
              bloodType: 'o+',
              curp: data.info.seed,
              image: user.picture.large,
              skills: []
          }
        })
      })
    }

  render() {
    return html`
      <style>
        .main-app.out {
              animation: ${this._config.transition.type}TransitionPage ${this._config.transition.delay / 1000}s;
          }
      </style>
      <!-- Header -->
      <header class="header-app">
        <div class="title container-app">
          Catsys (beta)
        </div>
        <nav class="navbar-principal">
          <paper-button @click="${this.changePage}" page="home">Home</paper-button>
          <paper-button @click="${this.changePage}" page="default">More</paper-button>
        </nav>
      </header>
      <!-- Main content -->
      <main role="main" class="container-app main-app">
        ${
            this._page === 'home' ?
              html`<home-page class="page" active></home-page>` :
              ''
        }
        ${
          this._page === 'default' ?
            html`<default-page class="page" active></default-page>` :
            ''
        }
      </main>
      <footer class="footer-app">
        <div class="container-footer">
          <p>Made with &#9829; by the Catsys team.</p>
        </div>
        <a class="social-github" href="https://github.com/alfonsorios96/catsys-cli">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github-logo">
          <b>View on github</b>
        </a>
      </footer>
    `;
  }

  constructor() {
    super();
    this._page = 'home';
    this._config = {
      type: 'app',
      transition: {
        type: 'fadeIn',
        delay: 300
      }
    }
  }

  changePage(event) {
      const page = event.currentTarget.getAttribute('page');
      this._page = page;
    }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageOut = this.shadowRoot.querySelector('.main-app');
      pageOut.classList.add('out');
      setTimeout(() => {
        pageOut.classList.remove('out');
      }, this._config.transition.delay);
    }
  }
}

window.customElements.define('contact-list-app', ContactList);
