import {LitElement, html} from 'lit-element';

// These are the elements needed by this element.
import {styles} from './contact-list-styles.js';
import { fadeInTransitionPage } from './utils/contact-list-transitions.js';

import './pages/list-page.js';
import './pages/create-page.js';
import '@polymer/paper-button/paper-button.js';
// import {menuIcon} from './utils/contact-list-icons.js';

class ContactList extends LitElement {
  static get properties() {
    return {
      appTitle: {type: String},
      _page: {type: String},
      contacts: Array
    };
  }

  static get styles() {
      return [
          styles,
          fadeInTransitionPage
        ];
    }

    firstUpdated() {
      fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
          this.contacts = data.results.map(user => {
            return {
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
            };
          });
        });
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
          <paper-button @click="${this.changePage}" page="list">Lista de contactos</paper-button>
          <paper-button @click="${this.changePage}" page="create">Nuevo contacto</paper-button>
        </nav>
      </header>
      <!-- Main content -->
      <main role="main" class="container-app main-app">
        ${
            this._page === 'create' ?
              html`<create-page class="page" active @new-contact="${this.createContact}"></create-page>` :
              ''
        }
        ${
          this._page === 'list' ?
            html`<list-page class="page" active .contacts="${this.contacts}"></list-page>` :
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
    this.contacts = [];
    this._page = 'list';
    this._config = {
      type: 'app',
      transition: {
        type: 'fadeIn',
        delay: 300
      }
    }
  }

  createContact(event) {
    this.contacts = [...this.contacts, event.detail];
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
