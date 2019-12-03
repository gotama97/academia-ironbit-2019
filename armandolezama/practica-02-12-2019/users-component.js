import { LitElement, css, html } from 'lit-element';

export class UsersComponent extends LitElement {

    static get styles() {
        return css `
        #main-container {
            background-color: #000000 ;
        }
        .profile-pick {
            width: 120px;
            hiegth: 220px;
            margin: 40px; 
        }

        .profile {
            display: inline-block;
            background-color: #82b74b;
        }

        .profile-name {
            color: #FFFFFF; 
        }

        #sign {
            font-size: 3.15rem;
            color: #FFFFFF;
            margin: 0;
        }
        `
    }

    render() {
        return html `
        <article id="main-container">
            <section id="sign-container" >
                <h1 id="sign">Who's watching?</h1>
            </section>
            <section id="profiles-container" >
                <article class="full-section">
                    <div class="profile">
                        <img class="profile-pick" src="https://www.stickpng.com/assets/images/587389d8f3a71010b5e8ef4b.png">
                    </div>
                    <p class="profile-name">Profile name</p>                    
                </article>
            </section>
        </article>
        `;
    }
}
customElements.define('users-component', UsersComponent);