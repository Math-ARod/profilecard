import html from './profile.component.html';
import './profile.component.scss';

class Profile extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
		this.classList.add('profile-component-root');
	}
}

customElements.define('profile-card-profile', Profile);
