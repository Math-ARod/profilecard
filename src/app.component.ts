import html from './app.component.html'
import './app.component.scss'
class App extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
		this.classList.add('profile-card', 'mdc-card')
	}
}

customElements.define('profile-card', App);